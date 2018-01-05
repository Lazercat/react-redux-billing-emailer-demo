// prod.js production keys here

module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  googleCallbackURL: process.env.GOOGLE_CALLBACK_URL,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
};


Error
     at /app/node_modules/passport-google-oauth20/lib/strategy.js:95:21
     at passBackControl (/app/node_modules/oauth/lib/oauth2.js:132:9)
     at IncomingMessage.<anonymous> (/app/node_modules/oauth/lib/oauth2.js:157:7)
     at emitNone (events.js:110:20)
     at IncomingMessage.emit (events.js:207:7)
     at endReadableNT (_stream_readable.js:1047:12)
     at _combinedTickCallback (internal/process/next_tick.js:102:11)
     at process._tickCallback (internal/process/next_tick.js:161:9)
