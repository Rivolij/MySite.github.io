let login = sessionStorage.getItem("login");
let date = sessionStorage.getItem("date");
let gender = sessionStorage.getItem("gender");
let result = sessionStorage.getItem("result");




if(!login || !date){
    window.location.href = "./login.html"

}else{
    document.getElementById('header_login').innerText = login
    
    document.getElementById("btn_header_exit").addEventListener('click', () =>{
        sessionStorage.removeItem("login"); //localStorage || sessionStorage
        sessionStorage.removeItem("date"); //localStorage || sessionStorage
        sessionStorage.removeItem("gender"); //localStorage || sessionStorage
        sessionStorage.removeItem("result"); //localStorage || sessionStorage


        window.location.href = "./login.html"
    })

}


