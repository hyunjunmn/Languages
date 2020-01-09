const toDoform = document.querySelector(".js-toDoForm"),
toDoInput = toDoform.querySelector("input"),
toDoList = document.querySelector(".js-toDoList")



const TODOS_LS = 'toDos'
let toDos = [];
//let과 const의 차이점 : let은 재선언x 재할당 o const 재선언x 재할당x

function deleteToDo(event){ //html에서 li를 지우는 함수
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){ //toDos 안에 있는 항목들을 지우게함 filter는 안에 있는 조건들과 같은 것들을 찾아주는 함수
        return toDo.id !== parseInt(li.id); 
    });
    toDos = cleanToDos;
    saveToDos();
}

function paintToDo(text){ //input을 하고난 뒤 그것들을 보여주는 함수
    const li = document.createElement("li");
    const delbtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length+1;
    delbtn.innerText="X"; //x버튼생성
    delbtn.addEventListener("click",deleteToDo);
    span.innerText=text;
    li.appendChild(span); //text
    li.appendChild(delbtn); //deletebutton
    li.id=newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text:text,
        id:newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue)
    toDoInput.value="";
}


function loadToDos(){ //불러오기 함수
    const loadedToDos = localStorage.getItem(TODOS_LS)
    if(loadedToDos!==null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function saveToDos(){ //저장하는 함수
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos))
}
function init(){ //메인
    loadToDos();
    toDoform.addEventListener("submit",handleSubmit) //handlesubmit이벤트 발생
}


init();