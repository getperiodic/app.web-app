'use strict';

exports.index = function(req, res, next){
	var pageData = {
		title: 'Home page',
		page: {name:'home'},
		user: req.user
	};

	res.render('home/index', pageData);
};