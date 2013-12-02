'use strict';

var winston = require('winston'),
	mongoose = require('mongoose');

exports = module.exports = {
	environment: {
		name: 'development',
		version: '0.0.1',
		server: {
			port: 8001,
			address: 'http://local.ese-amexpub.com/'
		},
		database: {
			type: 'dev',
			url: 'mongodb://localhost:27017/ese-amexpub',
			db: mongoose.connect('mongodb://localhost:27017/ese-amexpub')
		},
		oauth: {
			facebook: {
				environment: 'dev',
				appid: 'appid',
				appsecret: 'appsecret',
				callbackurl: 'http://local.ese-amexpub.com/auth/facebook/callback'
			}
		},
		logger: {
			config: {
				transports: [
				new(winston.transports.Console)({
					handleExceptions: true,
					colorize: true
				}),
				new(winston.transports.File)({
					filename: './logs/default-'+(new Date())+'.log',
					handleExceptions: true,
					colorize: true
				})],
				exitOnError: false
			},
			apploggerconfig: {
				transports: [
				new(winston.transports.Console)({
					level: 'silly',	// handleExceptions: true,
					colorize: true
				}),
				new(winston.transports.File)({
					filename: './logs/extralogs-'+(new Date())+'.log',
					level: 'warn', // handleExceptions: true,
					colorize: true
				})]
			}
		}
	}
};