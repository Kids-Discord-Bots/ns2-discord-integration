# ns2-discord-integration
A Discord Integration to push stats into a channel when triggered via API call.

## Set Up
1. You need node installed (current LTS version or newer)
2. Download the newest version of the code
3. Rename the env file from ```.env.tmp``` to ```.env```
4. Open the env file (now ```.env```) and set values.
5. Optional: Configure `package.json`
6. Run `npm install`.

## Run
Run `app.ts` with `ts-node src/app.js` or `npm start`. \
Alternative you can use `npm run pm`, `npm run pm-restart` and `npm run pm-stop`.
This will use [pm2](https://www.npmjs.com/package/pm2) for executing

## Routes

* `POST /stats` \
  Trigger Webhook to post stats to Discord.
