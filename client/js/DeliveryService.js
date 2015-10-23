var DeliveryService = {

	list: [],
	

	getList: function(callback) {
		$.ajax({
			type: 'GET',
			url: 'http://localhost:3080/api/deliveries',
			dataType: 'json',
			success: function(list) {
				callback(list);
			}
		});
	}
}