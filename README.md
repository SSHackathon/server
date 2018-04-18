# server

node version v6.11.5

## Firebase setup
Install and login
```bash
npm install -g firebase-tools
firebase login
```
## Initiate firebase project

```bash
cd cloud_function
npm install -g firebase-tools
firebase login
firebase init functions
```

When promp:
  1) select project
  2) select language (Javascript)
  3) Do you want to use ESLint to catch probable bugs and enforce style? N
  4) File functions/package.json already exists. Overwrite? N
  5) File functions/index.js already exists. Overwrite? N
  6) Do you want to install dependencies with npm now? Y

## Deploy function
```bash
firebase deploy
```

## Start Lock event listener

Upadte config.js with firebase credentials

Monitors real time changes to locks from firebase db

```bash
cd ../lock
npm install
node app.js
```
