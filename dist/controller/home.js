'use strict';

var logger = require('../config/logger');

exports.index = function(req, res){
	console.log(req.user)
	logger.verbose(__filename + ' - logged out');

	res.render('home/index', {
		title: 'Home page',
		page: {name:'home'},
		user: req.user
	});
};
exports.uitest = function(req, res){
	console.log(req.user)
	logger.verbose(__filename + ' - logged out');

	res.render('uitest/index', {
		title: 'Home page',
		page: {name:'home'},
		user: req.user,
		ui_list_view_on_scroll: sampleJSONDataUIList
	});
};
exports.error404 = function(req, res){
	console.log(req.params)
	req.flash('error', "Page not found");
	res.render('home/404', {
		title: 'Home page',
		page: {name:"home"},
		user: req.user,
		flash_messages : req.flash()
	});
};

var sampleJSONDataUIList = {
	"dom_id":"cbp-so-scroller",
	"dom_class":"cbp-so-scroller",
	"dom_section":"cbp-so-section",
	"dom_class_side":"cbp-so-side",
	"dom_class_side_left":"cbp-so-side-left",
	"dom_class_side_right":"cbp-so-side-right",
	"listItems" : [
		{
			"left":"<h2>Lemon drops</h2><p>Fruitcake toffee jujubes. Topping biscuit sesame snaps jelly caramels jujubes tiramisu fruitcake. Marzipan tart lemon drops chocolate sesame snaps jelly beans.</p>",
			"right":"<img src='assets/images/npmd_dulw/5.png' alt='img01'>"
		},

		{
			"right":"<h2>Lemon drops</h2><p>Fruitcake toffee jujubes. Topping biscuit sesame snaps jelly caramels jujubes tiramisu fruitcake. Marzipan tart lemon drops chocolate sesame snaps jelly beans.</p>",
			"left":"<img src='assets/images/npmd_dulw/6.png' alt='img01'>"
		},
		{
			"left":"<h2>Lemon drops</h2><p>Fruitcake toffee jujubes. Topping biscuit sesame snaps jelly caramels jujubes tiramisu fruitcake. Marzipan tart lemon drops chocolate sesame snaps jelly beans.</p>",
			"right":"<img src='assets/images/npmd_dulw/1.png' alt='img01'>"
		},

		{
			"right":"<h2>Lemon drops</h2><p>Fruitcake toffee jujubes. Topping biscuit sesame snaps jelly caramels jujubes tiramisu fruitcake. Marzipan tart lemon drops chocolate sesame snaps jelly beans.</p>",
			"left":"<img src='assets/images/npmd_dulw/2.png' alt='img01'>"
		},
		{
			"left":"<h2>Lemon drops</h2><p>Fruitcake toffee jujubes. Topping biscuit sesame snaps jelly caramels jujubes tiramisu fruitcake. Marzipan tart lemon drops chocolate sesame snaps jelly beans.</p>",
			"right":"<img src='assets/images/npmd_dulw/3.png' alt='img01'>"
		},

		{
			"right":"<h2>Lemon drops</h2><p>Fruitcake toffee jujubes. Topping biscuit sesame snaps jelly caramels jujubes tiramisu fruitcake. Marzipan tart lemon drops chocolate sesame snaps jelly beans.</p>",
			"left":"<img src='assets/images/npmd_dulw/4.png' alt='img01'>"
		}
		,{
			"left":"<h2>Lemon drops</h2><p>Fruitcake toffee jujubes. Topping biscuit sesame snaps jelly caramels jujubes tiramisu fruitcake. Marzipan tart lemon drops chocolate sesame snaps jelly beans.</p>",
			"right":"<img src='assets/images/npmd_dulw/5.png' alt='img01'>"
		},

		{
			"right":"<h2>Lemon drops</h2><p>Fruitcake toffee jujubes. Topping biscuit sesame snaps jelly caramels jujubes tiramisu fruitcake. Marzipan tart lemon drops chocolate sesame snaps jelly beans.</p>",
			"left":"<img src='assets/images/npmd_dulw/6.png' alt='img01'>"
		}

	]
}