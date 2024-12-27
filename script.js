
const daysC = document.getElementById('daysc');
const hoursC = document.getElementById('hoursc');
const minutesC = document.getElementById('minc');
const secondsC = document.getElementById('secc');

const daysA = document.getElementById('daysa');
const hoursA = document.getElementById('hoursa');
const minutesA = document.getElementById('mina');
const secondsA = document.getElementById('seca');

const daysF = document.getElementById('daysf');
const hoursF = document.getElementById('hoursf');
const minutesF = document.getElementById('minf');
const secondsF = document.getElementById('secf');

const daysN = document.getElementById('daysn');
const hoursN = document.getElementById('hoursn');
const minutesN = document.getElementById('minn');
const secondsN = document.getElementById('secn');

const conhecemos = "8 nov 2024 23:59:00";
const amor = "27 nov 2024 04:09:00";
const ficamos = "1 dec 2024 21:30:00";
const namoro = "13 dec 2024 16:30:00";

function countup() {
    const conhecemosDate = new Date(conhecemos);
    const amorDate = new Date(amor);
    const ficamosDate = new Date(ficamos);
    const namoroDate = new Date(namoro);

    const currentDate = new Date();

    const totalSecondsc = (currentDate - conhecemosDate) / 1000;
    var daysc = Math.floor(totalSecondsc / 3600 / 24);
    var hoursc = Math.floor(totalSecondsc / 3600) % 24;
    var minutesc = Math.floor(totalSecondsc / 60) % 60;
    var secondsc = Math.floor(totalSecondsc) % 60;

    const totalSecondsa = (currentDate - amorDate) / 1000;
    var daysa = Math.floor(totalSecondsa / 3600 / 24);
    var hoursa = Math.floor(totalSecondsa / 3600) % 24;
    var minutesa = Math.floor(totalSecondsa / 60) % 60;
    var secondsa = Math.floor(totalSecondsa) % 60;

    const totalSecondsf = (currentDate - ficamosDate) / 1000;
    var daysf = Math.floor(totalSecondsf / 3600 / 24);
    var hoursf = Math.floor(totalSecondsf / 3600) % 24;
    var minutesf = Math.floor(totalSecondsf / 60) % 60;
    var secondsf = Math.floor(totalSecondsf) % 60;

    const totalSecondsn = (currentDate - namoroDate) / 1000;
    var daysn = Math.floor(totalSecondsn / 3600 / 24);
    var hoursn = Math.floor(totalSecondsn / 3600) % 24;
    var minutesn = Math.floor(totalSecondsn / 60) % 60;
    var secondsn = Math.floor(totalSecondsn) % 60;

    daysC.innerHTML = daysc;
    hoursC.innerHTML = formatTime(hoursc);
    minutesC.innerHTML = formatTime(minutesc);
    secondsC.innerHTML = formatTime(secondsc);
    console.log(daysc, hoursc);

    daysA.innerHTML = daysa;
    hoursA.innerHTML = formatTime(hoursa);
    minutesA.innerHTML = formatTime(minutesa);
    secondsA.innerHTML = formatTime(secondsa);
    console.log(daysa, hoursa);

    daysF.innerHTML = daysf;
    hoursF.innerHTML = formatTime(hoursf);
    minutesF.innerHTML = formatTime(minutesf);
    secondsF.innerHTML = formatTime(secondsf);
    console.log(daysf, hoursf);

    daysN.innerHTML = daysn;
    hoursN.innerHTML = formatTime(hoursn);
    minutesN.innerHTML = formatTime(minutesn);
    secondsN.innerHTML = formatTime(secondsn);
    console.log(daysn, hoursn);
    
};

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}


countup();


setInterval(countup, 1000);
