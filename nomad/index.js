/*//함수 외부에 있는 변수들을 불러오는 방법

function sayHello(name,age){
    console.log('Hello',name,"\nYour age is ",age);
}


sayHello("Jun",23);
console.log("hhh");
*/

/*//(`)백틱 사용방법 ${변수}
function sayHello(name,age){
   // console.log(`Hello ${name} Your age is ${age}`);
    return `Hello ${name} Your age is ${age}`
}

const greetJun = sayHello("Jun",23)

console.log(greetJun);
*/

/* function 구현
const calc = {
    plus:function(a,b){
        return a+b;
    },
    minus:function(a,b){
        return a-b;
    },
    multiple:function(a,b){
        return a*b;
    },
    divide:function(a,b){
        return a/b;
    }
}

const plus = calc.plus(5,0);
const minus = calc.minus(10,5);
const multiple = calc.multiple(5,1);
const divide = calc.divide(5,1);
console.log(plus,minus,multiple,divide);
*/


/*//js에서 html수정
const title = document.getElementById("title");
title.innerHTML = "Hi JS Im...";
title.style.color = 'red';
document.title = "TEST Vanilla Js";
console.dir(title);
*/
/*
//quertSelector && event (로직 추가법)
// handleresize에서 ()를 붙이면 즉시실행, 붙이지않으면 변경됬을때에 실행
//window.addEventListener("resize",handleResize());
//window.addEventListener("resize",handleResize)
const title = document.querySelector("#title");
const BASE_COLOR  = "white";
const OTHER_COLOR = "blue";
function handleClick() {
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }
    else{
        title.style.color = BASE_COLOR;
    }
}


function init(){
    title.style.color = BASE_COLOR;
}

title.addEventListener("click", handleClick);
init();

if('10'===10){ // ===은 BOOLEAN과 같음
    console.log("true");
}
else{
    console.log("FALSE");
}

const age = prompt("How old are u");
if(age>=18 && age<=21){
    console.log("You can drink but you should not")}
    else if(age > 21){
        console.log("You can drink")
    }
    else{
        console.log("You can't drink")
    }

console.log(age);

function handleOffline(){
    console.log("Status : Offline");
}

function handleOnline(){
    console.log("Status : Online");
}
window.addEventListener("offline",handleOffline);
window.addEventListener("online",handleOnline);
*/
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click",handleClick);
}

init();