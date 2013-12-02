
/**
 * Module dependencies.
 */
'use strict';

var express = require('express'),
	routes = require('./routes'),
	user = require('./routes/user'),
	http = require('http'),
	path = require('path'),
	configsettings = require('./config/config'),
	appconfig = new configsettings();

if(process.env.NODE_ENV !== 'production'){
	require('longjohn');
}


var app = express();

// all environments
app.set('port', appconfig.settings.get('application:port'));
app.set('env', appconfig.settings.get('application:environment'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
  console.log('Running in environment: '+app.get('env'));
});


