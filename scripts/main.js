(function(window, document){
	'use strict';

	let App = window.App;
	let Truck = App.Truck;
	let DataStore = App.DataStore;
	let FormHandler = new App.FormHandler(document.querySelector('[data-coffee-order="form"]'));

	let myTruck = new Truck( 'ncc-1701', new DataStore() );
	window.myTruck = myTruck;

	FormHandler.addSubmitHandler();

})(window, document)