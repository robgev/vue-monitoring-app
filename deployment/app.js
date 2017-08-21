const http            = require('http');
const path            = require('path');
const figlet          = require('figlet');
const bodyParser      = require('body-parser');
const config          = require('./config');
const cookieParser    = require('cookie-parser');
const favicon         = require('serve-favicon');
const express         = require('express');

const app             = express();

const exclude 		  = require('./middlewares/exclude-express-route');

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.use('/api/projects', exclude('/syncup', require('./middlewares/monitoring')));

require('./routes')(app);

const server = http.createServer(app);

server.listen(process.env.PORT || config.get('port'), _ => {
  figlet.text('connect', (err, data) => {
	if (err) return console.log(err);
	console.log(data);
  })
});

const io = require('./socket')(server);

app.set('io', io);
