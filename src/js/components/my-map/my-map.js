define(['jquery', 'knockout', 'gmaps-loader'], function($, ko, GmapsLoader){

	'use strict'

	console.log('in my map');

	GmapsLoader.done(function(GoogleMaps){

		console.log('in gmaps');

		var myMap = function() {

			var _this = this;

			console.log('in myMap');


			var init = function(GoogleMaps){

				this.map = new GoogleMaps.Map(document.getElementById('map'), {
					zoom: 12
				});


				if (navigator.geolocation){
		        	navigator.geolocation.getCurrentPosition(function(position){
		        		var pos = {
		        			lat: position.coords.latitude,
		        			lng: position.coords.longitude
		        		};

		        		_this.map.setCenter(pos);
		        	});
		        }

				$.getJSON('data/games.json', function(data){

					var marker = new GoogleMaps.Marker({
						map: this.map,
						position: {
							lat: data.games[0].latitude,
							lng: data.games[0].longitude
						},
						title: 'Big Rec Pickup!'
					});

				});

			};

			init(GoogleMaps);

		};

		return myMap;
			
	}).fail(function(error){
		window.alert('Maps failed to load');
	});




});