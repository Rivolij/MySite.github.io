let test  = document.forms.test_form;


test.addEventListener('submit', (event)=>{
    event.preventDefault();
    let count = 0;
    let answer = document.getElementsByClassName('true');
    let answer2 = document.getElementsByClassName('true2');


    if(test.elements.v5.validity.valid){
        count++;
    }
    if(test.elements.v6.validity.valid){
        count++;
    }

    if(test.elements.v1.value == "0"){
        count++;
    }
    if(test.elements.v2.value == "0"){
        count++;

    }
    if(test.elements.v3.value == "0"){
        count++;
    }
    if(test.elements.v4.value == "0"){
        count++;

    }

    for (i = 0; i < answer.length; i++) {
        answer[i].style.backgroundColor = "rgb(231, 109, 1)";
    }

    for (i = 0; i < answer2.length; i++) {
        answer2[i].style.backgroundColor ="rgb(231, 109, 1)";
        answer2[i].style.opacity = 1;
    }

    sessionStorage.setItem("result", count);

    document.getElementById("result").innerText = "Результат: " + count;


})



function reset(){
    let answer = document.getElementsByClassName('true');
    let answer2 = document.getElementsByClassName('true2');
    sessionStorage.setItem("result", 0);


    for (i = 0; i < answer.length; i++) {
        answer[i].style.backgroundColor = "";
    }

    for (i = 0; i < answer2.length; i++) {
        answer2[i].style.backgroundColor ="";
        answer2[i].style.opacity = 0;
    }


    document.getElementById("result").innerText = "Результат: 0";

    test.elements.v1[0].checked = false
    test.elements.v1[1].checked = false
    test.elements.v1[2].checked = false
    test.elements.v1[3].checked = false
        
    test.elements.v2[0].checked = false
    test.elements.v2[1].checked = false
    test.elements.v2[2].checked = false
    test.elements.v2[3].checked = false

    test.elements.v3[0].checked = false
    test.elements.v3[1].checked = false
    test.elements.v3[2].checked = false
    test.elements.v3[3].checked = false

    test.elements.v4[0].checked = false
    test.elements.v4[1].checked = false
    test.elements.v4[2].checked = false
    test.elements.v4[3].checked = false

    test.elements.v5.value = "";
    test.elements.v6.value = "";

}


document.getElementById("reset").addEventListener('click', reset)
