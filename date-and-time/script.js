function getDateAndTime(){
    currentDateAndTime = new Date();
    currentDate = currentDateAndTime.getDate();
    currentMonth = currentDateAndTime.getMonth();
    currentYear = currentDateAndTime.getFullYear();
    currentHour = currentDateAndTime.getHours();
    currentMinute = currentDateAndTime.getMinutes();
    currentSecond = currentDateAndTime.getSeconds();
    date = currentMonthName + " " + currentDate + " " + currentYear;
    time = `${currentHour}:${currentMinute}:${currentSecond}`;
}
function resetHTMLTags(){
    document.getElementById("dateArea").textContent = date;
    document.getElementById("timeArea").textContent = time;
}
function getMonthName(m){
    switch(m){
        case 0:
            return "January";
        case 1:
            return "February";
        case 2:
            return "March";
        case 3:
            return "April";
        case 4:
            return "May";
        case 5:
            return "June";
        case 6:
            return "July";
        case 7:
            return "August";
        case 8:
            return "September";
        case 9:
            return "October";
        case 10:
            return "November";
        case 11:
            return "December";
        default:
            return;
    }
}
function Update(){
    getDateAndTime();
    resetHTMLTags();
}

let currentDateAndTime = new Date();
let currentDate = currentDateAndTime.getDate();
let currentMonth = currentDateAndTime.getMonth();
let currentMonthName = getMonthName(currentMonth);
let currentYear = currentDateAndTime.getFullYear();
let currentHour = currentDateAndTime.getHours();
let currentMinute = currentDateAndTime.getMinutes();
let currentSecond = currentDateAndTime.getSeconds();
let date = currentMonthName + " " + currentDate + " " + currentYear;
let time = `${currentHour}:${currentMinute}:${currentSecond}`;
setInterval(Update, 1000);