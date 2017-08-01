const url = require('url');
const express = require('express');
const proxy = require('proxy-middleware');
const signalRProxy = require('express-http-proxy');
const cors = require('cors');

// All API calls need an additional "/api" tag in the URL

const Proxy = ({ target = 'https://staging5.cloudfleetmanager.com' }) => {
    const app = express();

    const proxyOptions = url.parse(target);

    proxyOptions.cookieRewrite = true;
    app.use(cors({
        credentials: true,
        origin: true
    }));

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', req.get('origin'));
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
    });

    app.use('/signalr', signalRProxy(target, {
        proxyReqPathResolver(req) {
            const { originalUrl, url: currentUrl } = req;

            if (originalUrl.indexOf('connect') !== -1) {
                return '/signalr' + url.parse(currentUrl).path;
            }

            if (originalUrl.indexOf('/signalr/send') !== -1) {
                return url.parse(currentUrl).path.replace('/signalr', '');
            }

            return url.parse(req.currentUrl).path;
        }
    }));

    app.use('/api', proxy(proxyOptions));

    return app;
};

// x
if (!module.parent) {
    const appProxy = Proxy({ origin: 1337 });
    appProxy.listen(8081, '0.0.0.0', (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Proxy is listening on port ' + 8081);
    });
}

module.exports = Proxy;