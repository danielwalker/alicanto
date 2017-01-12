## Building

You'll need node and npm and yarn https://yarnpkg.com/en/docs/install

Install the node modules:

`yarn install`

Install Ionic:

`npm install -g cordova ionic`

Then activate the watch/build process in a terminal window using:

`ionic serve -b -d`

## Electron

You need to run the app using Electron because sockets, etc. aren't available in the browser. 

`npm install`

then 

`npm start`