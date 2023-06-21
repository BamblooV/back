const allowedorigins = require('./allowedOrigins');

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedorigins.indexOf((origin)) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not Aallowed by cors'))
    }
  },
  optionsSuccessStatus: 200
}

module.exports = corsOptions;