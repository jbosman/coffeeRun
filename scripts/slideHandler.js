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
		
		this.$slideInput.on( 'input', function(e){
			e.preventDefault();
			fn(this.value);
		})
	}

	SlideHandler.prototype.udpateSlideDestinationClasses = function(slideValue){
		let classes = '';

		if( slideValue > 66 )
			classes += ' high-caf';
		else if( slideValue > 33 )
			classes += 'med-caf';
		else
			classes += 'low-caf';
		
		this.$slideValueDestination[0].className = classes;
	}

	SlideHandler.prototype.updateSlideDestinationHTML = function(slideValue){
		this.udpateSlideDestinationClasses(slideValue);
		this.$slideValueDestination.html(slideValue);
	}

	SlideHandler.prototype.resetSlideDestinationHTML = function(){
		 this.updateSlideDestinationHTML(this.$slideInput[0].defaultValue);
	}

	App.SlideHandler = SlideHandler;

	window.App = App;

})(window)