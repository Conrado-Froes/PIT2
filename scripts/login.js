function autenticar(){
    const usr = document.forms["login"]["email"].value;
    const pwd = document.forms["login"]["pwd"].value;
    
    if (usr == "admin@gmail.com" && pwd == "123"){
        window.location.href="main.html";
        return false;
    }else{
        alert("E-mail ou senha incorretos");
    }
}