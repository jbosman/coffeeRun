(function(window){

	let App = window.App || {};
	let $ = window.jQuery;

	function Checklist(selector){
		if(!selector)
			throw new Error('No selector provided!');

		this.$element = $(selector);

		if( !this.$element.length )
			throw new Error('Could not find element with selector: ' + selector);
	}

	Checklist.prototype.addRow = function(coffeeOrder){
		this.removeRow(coffeeOrder.emailAddress);
		let rowElement = new Row(coffeeOrder);
		this.$element.append(rowElement.$element);
	}

	Checklist.prototype.removeRow = function(customerEmail){
		this.$element
			.find(`[value="${customerEmail}"]`)
			.closest(`[data-coffee-order="checkbox"]`)
			.remove();
	}

	Checklist.prototype.addClickHandler = function(fn){

		this.$element.on( 'click', 'input', function(e){
			let email = e.target.value
			this.removeRow(email);
			fn(email);
		}.bind(this))

	}

	function Row(coffeeOrder){
		let $div = $('<div></div>', {
			'data-coffee-order': 'checkbox',
			'class': 'checkbox'
		});

		let $label = $('<label></label>');

		let $checkbox = $('<input></input>', {
			'type': 'checkbox',
			'value': coffeeOrder.emailAddress
		})

		$label.append($checkbox)
		$label.append(this.buildOrderDescription(coffeeOrder));
		$div.append($label);

		this.$element = $div;
	}

	Row.prototype.buildOrderDescription = function({ size, flavor, coffee, emailAddress, strength}){
		return `${size} ${flavor} ${coffee}, (${emailAddress}) [${strength}x]`;
	}

	App.Checklist = Checklist;
	window.App = App;

})(window)