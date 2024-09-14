function displayCurrentTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let period = "AM";

    if (hours >= 12) {
        period = "PM";
    }


    hours = hours % 12;
    if (hours === 0) {
        hours = 12;
    }

    
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let formattedTime = `${hours}:${minutes}:${seconds} ${period}`;
    document.getElementById("time").textContent = formattedTime;
}


setInterval(displayCurrentTime, 1000);


displayCurrentTime();

