const mounthsLeft = document.getElementById("mounths-count");
const daysLeft = document.getElementById("days-count");
const hoursLeft = document.getElementById("hours-count");
const minutesLeft = document.getElementById("minutes-count");
const secondsLeft = document.getElementById("seconds-count");

const countdown = () =>{
    const serratecEnds = new Date(2021, 08, 01);
    const currentDate = new Date();
    
    const differenceBetweenDates = new Date(serratecEnds - currentDate);
    
    mounthsLeft.innerHTML = differenceBetweenDates.getMonth() - 1;
    daysLeft.innerHTML = differenceBetweenDates.getDate();
    hoursLeft.innerHTML = differenceBetweenDates.getHours();
    minutesLeft.innerHTML = differenceBetweenDates.getMinutes();
    secondsLeft.innerHTML = differenceBetweenDates.getSeconds();
}

const formatTime = time => {
   return time < 10? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
