let y = 0;

let array1 = document.getElementsByClassName('def');

forward1();
function forward1() {

    if (y < array1.length) {
        y++
    }

    document.documentElement.style.setProperty('--ex', (y-1) * (-110) + "vw");

    selectName();

    
    document.getElementById("count").innerText = y + "/" + array1.length;
}

function backward1(){

    if (y > 1) {
        y--;
    }

    document.documentElement.style.setProperty('--ex', (y-1) * (-110) + "vw");


    selectName();
    
    document.getElementById("count").innerText = y + "/" + array1.length;
}


function selectName(){
    if(y == 1){
        document.getElementById("text").innerText = "Палпатин";
        document.getElementById("dis").innerText = "Цель всей жизни: Его стремление к власти является не просто амбицией, а главной целью всей его жизни, которой он готов пожертвовать всем, в том числе и другими.";
    }else if(y == 2){
        document.getElementById("text").innerText = "Акбар";
        document.getElementById("dis").innerText = "Стратегическое мышление: Акбар обладает выдающимся стратегическим мышлением и способностью предвидеть действия противника. Он умеет разрабатывать сложные и эффективные планы, которые часто приводят к победам.";
    }else if(y == 3){
        document.getElementById("text").innerText = "Вейдер";
        document.getElementById("dis").innerText = "Внушающий страх: Его грозная внешность, тёмный костюм, зловещее дыхание и неумолимый характер делают его одним из самых внушающих страх персонажей.";
    }else if(y == 4){
        document.getElementById("text").innerText = "Вирс";
        document.getElementById("dis").innerText = "Планирование и организация: Он способен разрабатывать и организовывать сложные военные операции, координируя действия различных подразделений.";
    }else if(y == 5){
        document.getElementById("text").innerText = "Кренник";
        document.getElementById("dis").innerText = "Стремление к успеху: Кренник одержим стремлением к успеху и признанию. Он жаждет прославиться и занять высокое положение в имперской иерархии.";
    }else if(y == 6){
        document.getElementById("text").innerText = "Инквизитор";
        document.getElementById("dis").innerText = "Знание Тёмной стороны: Гранд-инквизитор обладает глубокими знаниями тёмной стороны Силы и использует её в своих целях. Он обучен техникам, направленным на подавление и уничтожение джедаев.";
    }else if(y == 7){
        document.getElementById("text").innerText = "Траун";
        document.getElementById("dis").innerText = "Непревзойдённый интеллект: Траун обладает выдающимся интеллектом и аналитическими способностями. Он способен просчитывать действия противника на несколько шагов вперёд и предвидеть возможные исходы.";

    }
}



document.getElementById('btn_forward').addEventListener('click', forward1);
document.getElementById('btn_backward').addEventListener('click', backward1);




function search(){
    let user_input = document.getElementById('input_search')

    if(user_input.value == "Палпатин"){
        y = 0
        forward1()
        user_input.value = ""
        user_input.placeholder = "введите имя персонажа"
    
    }else if(user_input.value == "Акбар"){
        y = 1
        forward1()
        user_input.value = ""
        user_input.placeholder = "введите имя персонажа"
    }else if(user_input.value == "Вейдер"){
        y = 2
        forward1()
        user_input.value = ""
        user_input.placeholder = "введите имя персонажа"
    }else if(user_input.value == "Вирс"){
        y = 3
        forward1()
        user_input.value = ""
        user_input.placeholder = "введите имя персонажа"
    }else if(user_input.value == "Кренник"){
        y = 4
        forward1()
        user_input.value = ""
        user_input.placeholder = "введите имя персонажа"
    }else if(user_input.value == "Инквизитор"){
        y = 5
        forward1()
        user_input.value = ""
        user_input.placeholder = "введите имя персонажа"
    }else if(user_input.value == "Траун"){
        y = 6
        forward1()
        user_input.value = ""
        user_input.placeholder = "введите имя персонажа"
    }else{
        user_input.value = ""
        user_input.placeholder = "не найдено"
    }

    

}

document.getElementById('btn_search').addEventListener('click', search);


