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

## Steps to configure GitHub CI for your server

0. Issue this command in your (linux) OS: `ssh-keygen -m PEM -t rsa -b 4096 -C "some-name"`
1. Copy the content of generated private key in clipboard
2. Go to your repository GitHub setting page. Under the **secret** section add a secret for **actions** and paste the copied value from prev step. If you are confused it should be somewhere like this: https://github.com/kasir-barati/nestjs-github-ci/settings/secrets/actions/new
3. Add the generated public key in the server `authorized_keys`
