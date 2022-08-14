const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}`;
}

getClock(); //페이지가 실행 되었을 때 바로 실행
setInterval(getClock, 1000); //1초마다 getClock을 호출

//setInterval(sayHello, 5000);
//sayHello 함수를 5초마다 호출
