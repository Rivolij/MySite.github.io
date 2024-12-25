let login = sessionStorage.getItem("login");
let date = sessionStorage.getItem("date");
let gender = sessionStorage.getItem("gender");
let result = sessionStorage.getItem("result");




if(!login || !date){
    window.location.href = "./login.html"

}else{
    document.getElementById('header_login').innerText = login
    
}


