"use strict";
// Dom7
var $ = Dom7;

// Init App
var app = new Framework7({
	root: '#app',
	theme: 'ios',
	routes: routes,
	view: {
		pushState: false,
	},
});

app.sheet.create({
	el: '.my-sheet-swipe-to-close',
	swipeToClose: true,
	backdrop: true,
});


var mainView = app.views.create('.view-main', {
	url: './index.html'
}); 