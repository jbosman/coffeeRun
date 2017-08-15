(function(window){
	'use strict';
	let App = window.App || {};

	function FormHandler(selector){
		if(!selector)
			throw new Error('No selector provided!');

		this.formElement = selector;

		if( this.formElement.length === 0 )
			throw new Error('Could not find form element with selector: ' + selector);

	}

	FormHandler.prototype.addSubmitHandler = function(){
		console.log('Setting submit handler for form.');

		this.formElement.addEventListener( 'submit', function(e){
			e.preventDefault();
			let data = {};
			Object.keys(this).forEach((key) => {
				if( this[key].name === 'size' ){
					if( this[key].checked )
						data[this[key].name] = this[key].value;
				}
				else {
					data[this[key].name] = this[key].value;
				}
			})

			console.log(data)
		})
	}

	App.FormHandler = FormHandler;

	window.App = App;


})(window)