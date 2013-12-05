'use strict';
var path = require('path'),
	periodic = require('../helpers/periodic.controller'),
	sampledata = require('../resources/sample/sampledata');

exports.index = function(req, res, next){
	console.log("__dirname",path.resolve(__dirname,"../views/periodic/samplelayout.json"));
	var pageData = {
		title: 'Home page',
		page: {name:'home'},
		user: req.user,
		headerjs: ["/scripts/home-index.js"]
	};
	res.set('Cache-Control','max-age=900, public');
	res.render('home/index', pageData);
};

exports.page = function(req, res, next){
	var file = path.resolve(__dirname,"../views/periodic/samplelayout.json"),
		pageData = {
			title: 'Random page',
			page: {name:'home'},
			user: req.user,
			headerdata: sampledata.sample_navdata,
			slideshowdata: sampledata.sample_content,
			staticonedata: sampledata.sample_staticcontent,
			statictwodata: sampledata.sample_staticcontent,
			listviewscrolldata: sampledata.sample_content
			/*,
			headerjs: ["/scripts/page-index.js"]*/
		},
		headers = {
			'Cache-Control':'max-age=900, public'
		};
	periodic.renderLayout({
			req:req,
			res:res,
			next:next,
			file:file,
			headers:headers,
			pagedata:pageData
		});
};

