const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greetings")


const SHOWING_ON = "showing",
 USER_LS = "currentUser"

function askForName(){
    form.classList.add(SHOWING_ON);
    form.addEventListener("submit",handleSubmint)
}

function handleSubmint(event){
    event.preventDefault(); //초기화가 되지않게 막아주는 명령어
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    greeting.innerText = `Hello ${text}`
}
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser===null){
        //user off
        askForName();

    }
    else{ //user on
        paintGreeting(currentUser);
       
    }

}

function init(){
    loadName();
}

init();