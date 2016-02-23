console.log('\'Allo \'Allo!');

// Start the main app logic.
define(function (require) {

	var $ = require('jquery'),
		ko = require('knockout');


	require('../lib/themoviedb');

	require('jquery-ui');


	'use strict';


    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.

    theMovieDb.common.api_key = 'cdf9ba9f9310e7c5b48c8eeececfa99c';

    this.movies = ko.observableArray([]);
    this.imageBase = theMovieDb.common.images_uri + 'w500/';


    var getData = function() {

    	var _this = this;

    	// var url = 'https://api.themoviedb.org/3/discover/movie/?api_key=cdf9ba9f9310e7c5b48c8eeececfa99c&callback=?';

    	theMovieDb.discover.getMovies({}, function(data){
    		data = JSON.parse(data);
    		console.log(data);
    		_this.movies(data.results);
    	}, function(error){
    		console.log(error);
    	});

    	var urlBase = 'http://www.omdbapi.com/?'

    	_this.query = ko.observable();


    };

    getData();

	ko.applyBindings(this);


});