const body = document.querySelector("body");


const IMG_NUMBER = 5;

function handleImgLoad(){
    console.log('finished loading')
}
function paintImage(imgNumber){
    const image = new Image();
    image.src = `./images/${imgNumber + 1}.jpg`; //이미지생성
    body.prepend(image);
    image.classList.add("bgImage"); //html소스에 bgimage클래스리스트 추가
   //image.addEventListener("loadend",handleImgLoad)
}

function getRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();