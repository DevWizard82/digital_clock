const hoursEL = document.getElementById("hours");
const minutesEL = document.getElementById("minutes");
const secondsEL = document.getElementById("seconds");
const ampmEL = document.getElementById("ampm");

updateTime();

function updateTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    if (hours > 12) {
        hoursEL.textContent = String(hours-12).padStart(2,"0");
        minutesEL.textContent = String(minutes).padStart(2,"0");
        secondsEL.textContent = String(seconds).padStart(2,"0");
        ampmEL.textContent = "PM";

    }else {
        hoursEL.textContent = String(hours).padStart(2,"0");
        minutesEL.textContent = String(minutes).padStart(2,"0");
        secondsEL.textContent = String(seconds).padStart(2,"0");
        ampmEL.textContent = "AM";
    }
    setTimeout(updateTime,1000);
}



