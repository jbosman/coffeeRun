(function(window){
	'use strict';
	let App = window.App || {};
	let $ = window.jQuery;

	function FormHandler(selector){
		if(!selector)
			throw new Error('No selector provided!');

		this.$formElement = $(selector);

		if( !this.$formElement.length )
			throw new Error('Could not find form element with selector: ' + selector);

	}

	FormHandler.prototype.addSubmitHandler = function(fn){
		console.log('Setting submit handler for form.');

		this.$formElement.on( 'submit', function(e){
			e.preventDefault();
			let data = {};
			$(this).serializeArray().forEach( (item) => {
				data[item.name] = item.value;
			})
			fn(data);
			this.reset();
			this.elements[0].focus();
		})	
	}

	FormHandler.prototype.addFormResetHandler = function(fn){

		this.$formElement.on( 'reset', function(e){
			fn();
		})

	}

	App.FormHandler = FormHandler;

	window.App = App;


})(window)