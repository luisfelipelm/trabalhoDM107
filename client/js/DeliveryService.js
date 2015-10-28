var DeliveryService = {

	list: [],
	

	getList: function(callback) {
		$.ajax({
			type: 'GET',
			url: 'http://localhost:3000/api/deliveries',
			dataType: 'json',
            beforeSend: function(xhr) {
                xhr.setRequestHeader('X-Access-Token', sessionStorage.getItem("token")) //May need to use "Authorization" instead
            },
			success: function(list) {
				callback(list);
			}
		});
	}
}