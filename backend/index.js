const cors = require('cors');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './secrets.env' });
var app = express();
const axios = require("axios");
const Agent = require('agentkeepalive');
const HttpsAgent = require('agentkeepalive').HttpsAgent;

// Keep Axios connection open with Azure Maps API for the weather information
const keepAliveAgent = new Agent({
    maxSockets: 160,
    maxFreeSockets: 160,
    timeout: 60000,
    freeSocketTimeout: 30000,
    keepAliveMsecs: 60000
});

const httpsKeepAliveAgent = new HttpsAgent({
    maxSockets: 160,
    maxFreeSockets: 160,
    timeout: 60000,
    freeSocketTimeout: 30000,
    keepAliveMsecs: 60000
});

const axiosInstance = axios.create({
    httpAgent: keepAliveAgent,
    httpsAgent: httpsKeepAliveAgent
});

// Make the axios instance available for all the splitted routes in various file
app.set('axios', axiosInstance);

// Middlewares
app.use(express.json());
app.use(cors({ credentials: true }));
app.use(express.urlencoded({ extended: true }));

// Initiate the routes
app.use('/api', require('./routes/api'));

// Serve the frontend site
const rootPath = __dirname.substring(0, __dirname.length - 8);
app.use(express.static(rootPath + '/frontend/build'));
app.get('*', (req, res) => res.sendFile(rootPath + '/frontend/build/index.html'));

// Start the server
app.listen(process.env.PORT, console.log(`Server started on port ${process.env.PORT}`));
