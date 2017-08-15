(function(window){
	'use strict';

	let App = window.App || {};

	function Truck( truckId, db){
		this.truckId = truckId;
		this.db = db;
	}

	Truck.prototype.createOrder = function(order){
		console.log('Adding order for ' + order.emailAddress );
		this.db.add(order.emailAddress, order);
	}

	Truck.prototype.deliverOrder = function(customerId){
		console.log('Delivering order for ' + customerId);
		this.db.remove(customerId);
	}

	Truck.prototype.printOrders = function(){
		console.log('Truck #' + this.truckId + ' has pending orders:');
		
		Object.keys(this.db.getAll()).forEach( function(customerId){
			console.log( this.db.get(customerId) );
		}.bind(this))
	}

	App.Truck = Truck;
	window.App = App;

})(window)