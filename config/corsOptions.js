const allowedOrigins = require('./allowedOrigins')

const corsOptions = {
    origin: (origin, callback) => {
        console.log("origin=",origin);
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            console.log("OK-------");
            callback(null, true)
        } else {
            console.log("KO-------");
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
}

module.exports = corsOptions 