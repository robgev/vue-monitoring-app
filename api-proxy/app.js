const url = require('url');
const express = require('express');
const proxy = require('proxy-middleware');
const signalRProxy = require('express-http-proxy');
const cors = require('cors');
const emoji = require('node-emoji');
const socket = require('./net');
const request = require('request');

// All API calls need an additional "/api" tag in the URL

let projectsTargets = {
    '8087': 'https://staging5.cloudfleetmanager.com', // maintenance
    '8880': 'https://staging4.cloudfleetmanager.com', // blog
    '8884': 'https://staging4.cloudfleetmanager.com', // crewing
    '8882': 'https://staging5.cloudfleetmanager.com', // miscellaneous
    '8280': 'https://staging5.cloudfleetmanager.com', // disturbance
    '8089': 'https://staging5.cloudfleetmanager.com', // inspections
    '8881': 'https://staging4.cloudfleetmanager.com', // certificates
    '8121': 'https://staging5.cloudfleetmanager.com', // circulars
    '8380': 'https://staging4.cloudfleetmanager.com', // towage
    '8228': 'https://staging4.cloudfleetmanager.com', // employees
    '8081': 'https://staging4.cloudfleetmanager.com', // for downloading files
    'default': 'https://staging5.cloudfleetmanager.com' // default
}

const fetchProxyTargets = _ => {
    request('http://127.0.0.1:3000/api/hanseaticsoft/proxy-targets', (err, res, body) => {
        if (err) {
            console.log('Log ::: Local network error ::: ', err);
        }

        projectsTargets = JSON.parse(body);
    });
}

fetchProxyTargets();

socket.on('data', data => {

    console.log('Log ::: Should update  :::');

    const converted = JSON.parse(data.toString('utf8'));
    const { msg } = converted;

    if (msg === 'update-proxy-targets') {
        fetchProxyTargets();
    }
});

const getPort = origin => origin.substr(origin.lastIndexOf(':') + 1, 4);

const getTarget = (port = 'default') => projectsTargets[port];

const app = express();

app.use(cors({
    credentials: true,
    origin: true
}));

app.use('/signalr', signalRProxy(getTarget(), {
    proxyReqPathResolver(req) {
        const { originalUrl, url: currentUrl } = req;

        const parsedUrl = url.parse(currentUrl);

        if (originalUrl.indexOf('connect') !== -1) {
            return '/signalr' + parsedUrl.path;
        }

        if (originalUrl.indexOf('/signalr/send') !== -1) {
            return parsedUrl.path.replace('/signalr', '');
        }

        return parsedUrl.path;

    }
}));

app.use('/api', (req, res, next) => {
    
    const { origin, referer, host } = req.headers;

    const port = getPort(origin || referer || host);

    const targetUrl = getTarget(port.toString());

    const proxyOptions = url.parse(targetUrl);

    proxyOptions.rejectUnauthorized = false;

    proxyOptions.cookieRewrite = true;

    console.log(
        '*********************',
        emoji.get('coffee'),
        emoji.get('smoking'),
        emoji.get('white_check_mark'),
        'SUCCESS ...',
        '*********************'
    );
    console.log('* Log ::: Port ::: ', port);
    console.log('* Log ::: Target ::: ', targetUrl);
    console.log('****************************************************************');
    // console.time('start');
    proxy(proxyOptions)(req, res, next);
    // console.timeEnd('start');
});

const port = 8081;
app.listen(port, '0.0.0.0', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Proxy is listening on port ' + port);
});
