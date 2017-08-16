(function(window){
	'use strict';

	console.log(window.App)

	let App = window.App;
	let Truck = App.Truck;
	let DataStore = App.DataStore;
	// Form
	let FORM_SELECTOR = '[data-coffee-order="form"]';
	let FormHandler = new App.FormHandler(FORM_SELECTOR);
	let SLIDE_SELECTOR = '#strengthLevel';
	let SLIDE_OUTPUT_ELEMENT = '#strenthLevelLabel';
	let slideHandler = new App.SlideHandler(SLIDE_SELECTOR, SLIDE_OUTPUT_ELEMENT)
	// Checklist
	let CHECKLIST_SELECTOR = '[data-coffee-orders="checklist"]';
	let checklist = new App.Checklist(CHECKLIST_SELECTOR);
	// Truck
	let myTruck = new Truck( 'ncc-1701', new DataStore() );
	window.myTruck = myTruck;

	// Event Handlers
	FormHandler.addSubmitHandler( function afterSubmit(data){
		myTruck.createOrder(data);
		checklist.addRow(data);
	});

	FormHandler.addFormResetHandler( slideHandler.resetSlideDestinationHTML.bind(slideHandler) );
	slideHandler.addSlideChangeHandler( slideHandler.updateSlideDestinationHTML.bind(slideHandler) );

	checklist.addClickHandler( function onClick(email){
		myTruck.deliverOrder(email);
	})

})(window)