const url = require('url');
const express = require('express');
const proxy = require('proxy-middleware');
const signalRProxy = require('express-http-proxy');
const cors = require('cors');

// All API calls need an additional "/api" tag in the URL

const portsWithStaging4 = ['8884', '8880', '8380', '8089'];

const getPort = host => host.substr(host.lastIndexOf(':') + 1);

const getTarget = port => {
    if (!port) {
        return 'https://staging5.cloudfleetmanager.com';
    }

    const targetStaging = portsWithStaging4.includes(port)? 4 : 5;

    return `https://staging${targetStaging}.cloudfleetmanager.com`;
}

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

            if (originalUrl.indexOf('connect') !== -1) {
                return '/signalr' + url.parse(currentUrl).path;
            }

            if (originalUrl.indexOf('/signalr/send') !== -1) {
                return url.parse(currentUrl).path.replace('/signalr', '');
            }

            return url.parse(req.currentUrl).path;
        }
    }));

    app.use('/api', (req, res, next) => {
        
        let port = getPort(req.headers.origin);

        const targetUrl = getTarget(port);

        const proxyOptions = url.parse(targetUrl);

        proxyOptions.cookieRewrite = true;

        console.log('Log ::: Port ::: ', getPort(req.headers.origin));

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
