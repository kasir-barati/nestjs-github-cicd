# Env files

- `cp .env.example .env`
- `cp .postgresql.env.example .postgresql.env`
- To get rid of too many logs comment `DEBUG=*` in the `.env` file

# Run it in local machine?

- `npm run compose:dev:up` to have dockerized postgresql
- `npm run start:dev` to start app in watch mode + preserving logs
- `docker build . -t test:1` to build the project base image

# How doe GitHub CI works?

- Push/Merges with master cause a build with for prod env
- Push/Merges with staging cause a build for dev env
