const Days = document.getElementById("Days");
const Hours = document.getElementById("Hours");
const Minutes = document.getElementById("Minutes");
const Seconds = document.getElementById("Seconds");

function getTargetDate(){
    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    return new Date(`January 1, ${nextYear} 00:00:00`).getTime();
}
   let targetDate = getTargetDate();

   function timer (){
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;
   
    const days = Math.floor(distance / 1000 / 60 / 60 / 24);
    const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(distance / 1000 / 60) % 60;
    const seconds = Math.floor(distance / 1000) % 60;

    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;

    if (distance < 0){
       targetDate = getTargetDate();
       return;
    }  
}

timer();
const countdown = setInterval(timer, 1000);

const starsContainer = document.getElementById("stars");
for(let i = 0; i < 500; i++){
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 100+ "s";
    star.style.opacity = Math.random();
    const size = Math.random() * 3 + 1;
    star.style.width = size + "px";
    star.style.height = size + "px";
    starsContainer.appendChild(star);
}

const currentYearText = document.getElementById("currentYear");
const nextYearText = document.getElementById("nextYear");
const currentYear = new Date() .getFullYear();
const nextYear = currentYear + 1;
currentYearText.innerHTML = `current Year: ${currentYear}`;
nextYearText.innerHTML = `Next Year: ${nextYear}`;
