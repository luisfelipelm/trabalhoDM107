function cadastrar() {

    
    if(document.getElementById("nome").value == "")
    {
        alert( "Preencha campo NOME corretamente!" );
        return false;
    }


    if( document.getElementById("email").value == "" || document.getElementById("email").value.indexOf('@') == -1 || document.getElementById("email").value.indexOf('.') == -1 )
    {
        alert( "Preencha campo E-MAIL corretamente!" );
        return false;
    }

    if (document.getElementById("password").value == "")
    {
        alert( "Preencha o campo PASSWORD!" );
        return false;
    }
    
    
        var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
        //xmlhttp.open("POST", "http://54.94.254.134:3000/login");
        xmlhttp.open("POST", "http://localhost:3000/api/user");
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        var login = { 
                'name': document.getElementById("nome").value,
                'username': document.getElementById("email").value,
                'password': document.getElementById("password").value,
                'role': "USER"
           };
     
        var data={};
        xmlhttp.onreadystatechange = function(){
            if (xmlhttp.readyState != 4) return;
            if (xmlhttp.status == 404){
                alert('Este email já está cadastrado!');
                return;
            }
            if (xmlhttp.status != 200 && xmlhttp.status != 304) {
                alert('HTTP error ' + xmlhttp.status);
                return;
            }

            data.resp = JSON.parse(xmlhttp.responseText);
            if(data.resp != null){
                sessionStorage.setItem("token","");
                alert('Cadastro feito com sucesso!');
                location.assign("../index.html","_blank");
            }else{
                alert('That didn\'t work!');
            }
        }
      
        xmlhttp.send(JSON.stringify(login));
}