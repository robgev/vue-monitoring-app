const url = require('url');
const express = require('express');
const proxy = require('proxy-middleware');
const signalRProxy = require('express-http-proxy');
const cors = require('cors');
const emoji = require('node-emoji')

// All API calls need an additional "/api" tag in the URL

const projectsTargets = {
    '8087': 'https://staging5.cloudfleetmanager.com', // maintenance
    '8880': 'https://staging4.cloudfleetmanager.com', // blog
    '8884': 'https://staging4.cloudfleetmanager.com', // crewing
    '8882': 'https://staging5.cloudfleetmanager.com', // miscellaneous
    '8280': 'https://staging5.cloudfleetmanager.com', // disturbance
    '8089': 'https://staging4.cloudfleetmanager.com', // inspections
    '8881': 'https://staging4.cloudfleetmanager.com', // certificates
    '8121': 'https://staging5.cloudfleetmanager.com', // circulars
    '8380': 'https://staging4.cloudfleetmanager.com', // towage
    '8228': 'https://staging4.cloudfleetmanager.com', // employees
    'default': 'https://staging5.cloudfleetmanager.com' // default
}

const getPort = origin => origin.substr(origin.lastIndexOf(':') + 1, 4);

const getTarget = (port = 'default') => projectsTargets[port];

const Proxy = _ => {
    const app = express();

    app.use(cors({
        credentials: true,
        origin: true
    }));

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', req.get('origin'));
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
    });

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
        
        const { origin, referer } = req.headers;

        const port = getPort(origin || referer);

        const targetUrl = getTarget(port);

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

        proxy(proxyOptions)(req, res, next);
    });

    return app;
};

// x
if (!module.parent) {
    const appProxy = Proxy({ origin: 1337 });
    const port = 8081;
    appProxy.listen(port, '0.0.0.0', (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Proxy is listening on port ' + port);
    });
}

module.exports = Proxy;
