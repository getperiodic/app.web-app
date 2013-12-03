'use strict';

exports.index = function(req, res, next){
	var pageData = {
		title: 'Home page',
		page: {name:'home'},
		user: req.user,
		headerjs: ["/scripts/home-index.js"]
	};
	res.set('Cache-Control','max-age=900, public');
	res.render('home/index', pageData);
};