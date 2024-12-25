

let login_form = document.forms.login_form;

login_form.addEventListener('submit', (event)=>{
    event.preventDefault();
    

    document.getElementById("login_error").innerText = "";
    document.getElementById("date_error").innerText = "";

    login = login_form.elements.input_login.value;
    date = login_form.elements.input_date.value;
    gender = login_form.elements.input_gender.value;




    if((login_form.elements.input_login.validity.valid && login_form.elements.input_date.validity.valid) && (login_form.elements.input_login.value.length >= 4 && login_form.elements.input_login.value.length <= 10)){
        sessionStorage.setItem("login", login)
        sessionStorage.setItem("date", date)
        sessionStorage.setItem("gender", gender)
        sessionStorage.setItem("result", 0); 


        window.location.href = "./index.html"
    }
    if(!(login_form.elements.input_login.value.length >= 4 && login_form.elements.input_login.value.length <= 10)){
        document.getElementById("login_error").innerText = "не меньше 4 ди не больше 10 символов";
    }
    if(!login_form.elements.input_login.validity.valid){
        document.getElementById("login_error").innerText = "Только на русском, первая буква заглавная";
    }   

    
    if ( !(login_form.elements.input_date.validity.valid) || !(singin.elements.input_login.value.length >= 4 && singin.elements.input_login.value.length <= 10)){
        document.getElementById("date_error").innerText = " от 1924-12-01 до 2024-12-31";

    }

    


});



