function login() {

        var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
        //xmlhttp.open("POST", "http://54.94.254.134:3000/login");
        xmlhttp.open("POST", "http://localhost:3080/login");
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        var login = { 
                'username': document.getElementById("email").value,
                'password': document.getElementById("password").value
           };
     
        var data={};
        xmlhttp.onreadystatechange = function(){
            if (xmlhttp.readyState != 4) return;
            if (xmlhttp.status == 401){
                alert('Usuário e/ou senha incorreto(s)!');
                return;
            }
            if (xmlhttp.status != 200 && xmlhttp.status != 304) {
                alert('HTTP error ' + xmlhttp.status);
                return;
            }

            data.resp = JSON.parse(xmlhttp.responseText);
            if(data.resp.token != null){
                sessionStorage.setItem("token",data.resp.token);
                location.assign("./html/report.html","_blank");
            }else{
                alert('That didn\'t work!');
            }
        }
      
        xmlhttp.send(JSON.stringify(login));
    
}