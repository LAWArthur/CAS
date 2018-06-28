var cv, cxt, h, w;
var age = Math.floor(Math.random() * 50000000000), civDeg, lastCivDeg, cAge = 0, civDegIndex = 0;
var time, timeSpeed = 100, SEPossiblity = Math.random() * 1000000, SEDev = Math.random() * 1000000;
var cDegList = ["Hunting Age", "Agriculture Age", "Industrial Age", "Atomic Age", "Infomation Age", "Microcosmic High-demensional Age", "Proton Age", "Universe Philosophy Age"];
$(function () {
    cv = $("canvas");
    cxt = cv[0].getContext("2d");
    fit();
    setTimeout(_update, 1);
    $(window).resize(function () {
        fit();
    })
});

function fit() {
    h = window.innerHeight;
    w = window.innerWidth;
    cv.attr({ "height": h, "width": w });
    cxt.fillStyle = "#000000";
    cxt.fillRect(0, 0, w, h);
}
function _update() {
    age += timeSpeed;
    cAge += timeSpeed;
    civDegIndex += timeSpeed;
    for (var i = 0; i < timeSpeed; i++) {
        if (Math.floor(Math.random() * SEPossiblity) == 0) {
            civDegIndex += Math.floor(Math.random() * SEDev);
        }
    }
    civDeg = cDegList[Math.floor(civDegIndex / 1000000) > 7 ? 7 : Math.floor(civDegIndex / 1000000)];
    draw();
    $("#CInfo").text("Universe Age:" + age + " Civilization Age:" + cAge + " Civilization Degree:" + civDeg);
    setTimeout(_update, time);
}
function draw() {
    var img = new Image();
    img.src = "images/" + civDeg + ".png";
    cxt.drawImage(img, 0, 0, w, h);
}