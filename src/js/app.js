


require.config({
	paths: {
		'jquery' 	: 'vendor/lib/jquery/dist/jquery.min',
		'jquery-ui' : 'vendor/lib/jquery-ui/jquery-ui',
		'knockout'	: 'vendor/lib/knockout/build/output/knockout-latest',
		'text' : 'vendor/lib/text/text',


		'my-map' : 'components/my-map/my-map',

		'jquery-mockjax' : 'vendor/lib/jquery-mockjax-master/dist/jquery.mockjax.min',

	}
});

require(['text']);

define(['jquery', 'knockout', 'gmaps-loader', 'text'], function($, ko, GmapsLoader){


	'use strict'

	var app = {

		init: function(){

			console.log('in init');

			console.log(ko.components);

			ko.components.register('my-map', {
				viewModel: { require: 'my-map'},
				template: { require: 'text!components/my-map/my-map-template.html'}
			});


			
		}

	};

	app.init();

	ko.applyBindings();
	



});

