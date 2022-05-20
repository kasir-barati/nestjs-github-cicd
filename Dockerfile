# --- Build stage
FROM 9109679196/ubuntu-node:1 as build_stage

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/
COPY . .

RUN npm ci
RUN npx prisma generate
RUN npm run build
RUN npm ci --production

# --- Copy stage
FROM 9109679196/ubuntu-node:1

WORKDIR /app

RUN apt-get update -y
RUN apt-get install -y nano

# <fix-pdf-lib-bug>
RUN apt-get update -y
RUN apt-get install -y fontconfig
# </fix-pdf-lib-bug>

COPY --from=build_stage /app/node_modules ./node_modules
COPY --from=build_stage /app/package*.json ./
COPY --from=build_stage /app/dist ./
COPY --from=build_stage /app/prisma ./prisma

# https://github.com/marcbachmann/node-html-pdf/issues/563
RUN echo "" > /tmp/openssl.cnf

# FIXME: Read port from .env
EXPOSE 3000

CMD [  "npm", "run", "start:migrate:prod" ]