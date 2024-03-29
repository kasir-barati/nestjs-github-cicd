# Env files

- `cp .env.example .env`
- `cp .postgresql.env.example .postgresql.env`
- To get rid of too many logs comment `DEBUG=*` in the `.env` file

# Run it in local machine?

- `pnpm install --frozen-lockfile` to have dockerized postgresql
- `pnpm compose:up` to have dockerized postgresql
- `pnpm prisma:dev` to push changes to db
- `npm run start:dev` to start app in watch mode + preserving logs

# How doe GitHub CI works?

- Push/Merges with master cause a build with for prod env
- Push/Merges with staging cause a build for dev env

## Steps to configure GitHub CI for your server

1. Issue this command in your (linux) OS: `ssh-keygen -m PEM -t rsa -b 4096 -C "some-name"`
2. Copy the content of generated private key in clipboard
3. Go to your repository GitHub setting page. Under the **secret** section add a secret for **actions** and paste the copied value from prev step, title the secret `SERVER_PRIVATE_KEY`. If you are confused it should be somewhere like this: https://github.com/{username}/{repo}/settings/secrets/actions/new
4. Add the generated public key in the server's like this:

   1. `cat .ssh/some-name.pub | ssh b@B 'cat >> .ssh/authorized_keys2'`
   2. `sudo chmod 640 .ssh/authorized_keys2`

5. Clone the project in a specific path
6. Create used envs in the GitHub action's secret.

# Some good tut which I used to do this:

- https://youtu.be/gW1TDirJ5E4
- https://youtu.be/TLB5MY9BBa4
- https://github.com/appleboy/ssh-action#setting-up-a-ssh-key
- https://stackoverflow.com/questions/22147574/fatal-could-not-read-username-for-https-github-com-no-such-file-or-directo
