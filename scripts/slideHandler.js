(function(window){

	let App = window.App || {};

	function SlideHandler( slideSelector, slideValueDestinationSelector ){
		if(!slideSelector)
			throw new Error('No selector provided!')
		if(!slideValueDestinationSelector)
			throw new Error('No selector provided!')

		this.$slideInput = $(slideSelector);
		this.$slideValueDestination = $(slideValueDestinationSelector);

		if( !this.$slideInput.length )
			throw new Error('Could not find form element with selector: ' + selector)
		if( !this.$slideInput.length )
			throw new Error('Could not find form element with selector: ' + selector)
	}

	SlideHandler.prototype.addSlideChangeHandler = function(fn){
		
		this.$slideInput.on( 'change', function(e){
			e.preventDefault();
			fn(this.value);
		})
	}

	SlideHandler.prototype.updateSlideDestinationHTML = function(slideValue){
		this.$slideValueDestination.html('Caffeine Rating: ' + slideValue);
	}

	SlideHandler.prototype.resetSlideDestinationHTML = function(){
		 this.updateSlideDestinationHTML(this.$slideInput[0].defaultValue);
	}

	App.SlideHandler = SlideHandler;

	window.App = App;

})(window)