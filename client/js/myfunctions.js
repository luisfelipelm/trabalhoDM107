function show() {

    
    $.ajax({
        'url': 'http://localhost:3000/api/v1/deliveries',
        'otherSettings': 'othervalues',
        dataType: 'json',
        'beforeSend': function(xhr) {
       xhr.setRequestHeader('X-Access-Token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0NDU2NDYxOTcwNzJ9.9ErfrGna8kPs3DPR_IIDA6gXMJo4-7y470BxEfZXOEQ') //May need to use "Authorization" instead
        },
        success: function(result) {
            // remove all existing rows
            $("tr:has(td)").remove();

            //get each article
            $.each(result, function (index, article) {
               // Create a new row and append the columns
                $("#added-articles").append($('<tr/>')
                        .append('<td>' + article.id_pedido + '</td>')
                        .append('<td>' + article.id_cliente + '</td>')
                        .append('<td>' + article.nome_recebedor + '</td>')
                        .append('<td>' + article.cpf_recebedor + '</td>')
                        .append('<td>' + article.endereco + '</td>')
                        .append('<td>' + article.bairro + '</td>')
                        .append('<td>' + article.cidade + '</td>')
                        .append('<td>' + article.estado + '</td>')
                        .append('<td>' + article.pais + '</td>')
                        .append('<td>' + Boolean(article.recebedor_entregador) + '</td>')
                        .append('<td>' + article.data_entrega + '</td>')
                        .append('<td>' + article.localizacao_geografica + '</td>')
                );	
            });

        },
        error: function(result){
            console.log(result);
        }      
});
       
	      		
}
