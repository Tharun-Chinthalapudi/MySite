setInterval(setTime, 1000);

function setTime() {
    let d = new Date();
    document.getElementById("demo").innerHTML =
        d.getHour() + ":" +
        d.getMinutes() + ":" +
        d.getSeconds();
}