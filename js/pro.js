document.getElementById('out_login').innerText = sessionStorage.getItem("login");
document.getElementById('out_date').innerText = sessionStorage.getItem("date");
document.getElementById('out_gender').innerText = sessionStorage.getItem("gender");
document.getElementById('out_result').innerText = sessionStorage.getItem("result");

function clear(){
    sessionStorage.removeItem("login"); //localStorage || sessionStorage
    sessionStorage.removeItem("date"); //localStorage || sessionStorage
    sessionStorage.removeItem("gender"); //localStorage || sessionStorage
    sessionStorage.removeItem("result"); //localStorage || sessionStorage


    window.location.href = "./login.html"
}

document.getElementById("btn_clear").addEventListener('click', clear);


