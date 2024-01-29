let heure = parseInt(document.getElementById("heure").textContent);
let minute = parseInt(document.getElementById("minu").textContent);
let seconde = parseInt(document.getElementById("seco").textContent);
let alarme = new Audio("/sound/sound1.mp3");

function updateClock() {
    let now = new Date();
    let milli = now.getMilliseconds(),
        sec = now.getSeconds(),
        min = now.getMinutes(),
        hou = now.getHours(),
        mo = now.getMonth(),
        dy = now.getDate(),
        yr = now.getFullYear();
    let month = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];
    let tags = ["mon","d","y","h","m","s","mi"],
        corr = [month[mo],dy,yr,hou,min,sec,milli];
    for(let i = 0; i < tags.length; i++){
        document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
    };
    if (hou == heure && min == minute && sec == seconde) {
        playSound(alarme); 
    }
}

function playSound(sound) {
    sound.play();
}

function initClock(){
    updateClock();
    window.setInterval("updateClock()", 1);
};



