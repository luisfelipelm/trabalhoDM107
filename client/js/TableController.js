var TableController = {

	init: function () {
        TableController.createTable();

	},
    
    
    createTable: function () {
        var list = DeliveryService.getList(function(list) {
            console.log(list); 
            // remove all existing rows
            $("tr:has(td)").remove();
            
            list.forEach(function(delivery) {
           
               // Create a new row and append the columns
                $("#added-articles").append($('<tr/>')
                        .append('<td>' + delivery.id_pedido + '</td>')
                        .append('<td>' + delivery.id_cliente + '</td>')
                        .append('<td>' + (delivery.nome_recebedor == null ? "-" : delivery.nome_recebedor) + '</td>')
                        .append('<td>' + (delivery.cpf_recebedor == null ? "-" : delivery.cpf_recebedor) + '</td>')
                        .append('<td>' + delivery.endereco + '</td>')
                        .append('<td>' + delivery.bairro + '</td>')
                        .append('<td>' + delivery.cidade + '</td>')
                        .append('<td>' + delivery.estado + '</td>')
                        .append('<td>' + delivery.pais + '</td>')
                        .append('<td>' + Boolean(delivery.recebedor_entregador) + '</td>')
                        .append('<td>' + (delivery.data_entrega == null ? "-" : delivery.data_entrega) + '</td>')
                        .append('<td>' + delivery.localizacao_geografica + '</td>')
                        .append('<td>' + delivery.status + '</td>'));	
            });     
	   });  
    }
};
    
//initialization
TableController.init();
