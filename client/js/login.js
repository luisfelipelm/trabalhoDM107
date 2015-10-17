function login() {

    
    $.ajax({
     url: 'http://localhost:3000/login',
     type: 'post',
     data: { 
                'username': 'admin@admin.com',//document.getElementById('email'),
                'password': 'admin'//document.getElementById('password')
           },
     dataType: "json",
     contentType: "application/json",
     crossDomain: true,
    //'Access-Control-Allow-Origin': '*',
     'Access-Control-Request-Headers': 'X-Custom-Header',
     beforeSend: function(xhr) {
       xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS'),
       xhr.setRequestHeader('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key')
       
        },
        
     success: function (data) {
        console.log("Response " +data);
     },    
     done:function (data) {
        console.log("Response " +data);
     },
    error: function (data) {
        console.log(data);
     }    
    });
	      		
}