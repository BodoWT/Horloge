let alarme = new Audio("/sound/sound1.mp3");

function playSound(sound) {
    sound.play();
}

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
//Pour lancer l'alarme avec les valeurs choisie
    let heureChoisie = parseInt(document.getElementById("heure-choisie").value);
    let minuteChoisie = parseInt(document.getElementById("minute-choisie").value);

    if (hou === heureChoisie && min === minuteChoisie && sec < 15) {
        playSound(alarme); 
    }
}
// Pour modifier les valeur dans mon alarme et définir une heure
function updateAlarme() {
    let heureChoisie = parseInt(document.getElementById("heure-choisie").value);
    let minuteChoisie = parseInt(document.getElementById("minute-choisie").value);
    heure =  heureChoisie;
    minute = minuteChoisie;
    document.getElementById("heure").textContent = heureChoisie  + "H";
    document.getElementById("minu").textContent = minuteChoisie  + "Min";
}

function initClock(){
    updateClock();
    window.setInterval(updateClock);
};