// 常量

// 变量
var cv, cxt, h, w;

// 主代码
$(function () {
    // 变量初始化
    cv = $("canvas");
    cxt = cv[0].getContext("2d");
    fit();
    draw();
    $(document).click(function (event) {
        cxt.beginPath();
        cxt.rect(w / 3, h / 2 - w / 27, w / 3, 2 * w / 27);
        cxt.closePath();
        if (cxt.isPointInPath(event.pageX, event.pageY)) {
            window.location.href = "game.html";
        }
    });
    // 设置重绘
    $(window).resize(function () {
        fit();
        draw();
    });
});

function draw() {
    cxt.fillStyle = "#ffff99";
    for (var i = 0; i < 250; i++) {
        cxt.beginPath();
        cxt.arc(Math.random() * w, Math.random() * h, Math.random() * 3, 0, Math.PI * 2);
        cxt.closePath();
        cxt.fill();
    }
    cxt.font = w / 25 + "px Segoe Script";
    cxt.fillStyle = "#ffffff";
    cxt.textAlign = "center";
    cxt.fillText("Civilization & Suspecion", w / 2, h / 5);
    cxt.font = w / 30 + "px Segoe Script";
    cxt.fillText("Start", w / 2, h / 2);
    cxt.beginPath();
    cxt.rect(w / 3, h / 2 - w / 27, w / 3, 2 * w / 27);
    cxt.closePath();
}
function fit() {
    h = window.innerHeight;
    w = window.innerWidth;
    cv.attr({ "height": h, "width": w });
    cxt.fillStyle = "#000000";
    cxt.fillRect(0, 0, w, h);
}