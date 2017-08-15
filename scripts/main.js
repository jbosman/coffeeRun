(function(window){
	'use strict';

	let App = window.App;
	let Truck = App.Truck;
	let DataStore = App.DataStore;
	let FORM_SELECTOR = '[data-coffee-order="form"]';
	let FormHandler = new App.FormHandler(FORM_SELECTOR);
	let SLIDE_SELECTOR = '#strengthLevel';
	let SLIDE_OUTPUT_ELEMENT = '#caffeineRating';
	let slideHandler = new App.SlideHandler(SLIDE_SELECTOR, SLIDE_OUTPUT_ELEMENT)

	let myTruck = new Truck( 'ncc-1701', new DataStore() );
	window.myTruck = myTruck;

	FormHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
	FormHandler.addFormResetHandler( slideHandler.resetSlideDestinationHTML.bind(slideHandler) );
	slideHandler.addSlideChangeHandler( slideHandler.updateSlideDestinationHTML.bind(slideHandler) );

})(window)