(function(window){
	'use strict';

	let App = window.App;
	let Truck = App.Truck;
	let DataStore = App.DataStore;
	let FORM_SELECTOR = '[data-coffee-order="form"]';
	let FormHandler = new App.FormHandler(FORM_SELECTOR);

	let myTruck = new Truck( 'ncc-1701', new DataStore() );
	window.myTruck = myTruck;

	FormHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));

})(window)