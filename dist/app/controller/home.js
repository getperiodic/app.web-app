'use strict';

exports.index = function(req, res, next){
	var pageData = {
		title: 'Home page',
		page: {name:'home'},
		user: req.user,
		headerjs: ["/scripts/home-index.js"]
	};

	res.render('home/index', pageData);
};