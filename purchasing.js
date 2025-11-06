const button1 = document.getElementById("upgButton1");
const frame1 = document.getElementById("upgFrame1");

const button2 = document.getElementById("upgButton2");
const frame2 = document.getElementById("upgFrame2");

const button3 = document.getElementById("upgButton3");
const frame3 = document.getElementById("upgFrame3");

const button4 = document.getElementById("upgButton4");
const frame4 = document.getElementById("upgFrame4");

const button5 = document.getElementById("upgButton5");
const frame5 = document.getElementById("upgFrame5");

const button6 = document.getElementById("upgButton6");
const frame6 = document.getElementById("upgFrame6");

const button7 = document.getElementById("upgButton7");
const frame7 = document.getElementById("upgFrame7");

const button8 = document.getElementById("upgButton8");
const frame8 = document.getElementById("upgFrame8");

const button9 = document.getElementById("upgButton9");
const frame9 = document.getElementById("upgFrame9");

const button10 = document.getElementById("upgButton10");
const frame10 = document.getElementById("upgFrame10");

const button11 = document.getElementById("upgButton11");
const frame11 = document.getElementById("upgFrame11");

const button12 = document.getElementById("upgButton12");
const frame12 = document.getElementById("upgFrame12");

button1.addEventListener("mousedown", () => {
    data_player -= 100;
    data_base_sec += 2;
    button1.classList.remove("upgFrames");
    frame1.outerHTML="";
});
button2.addEventListener("mousedown", () => {
    data_player -= 220;
    data_base_click += 2;
    button2.classList.remove("upgFrames");
    frame2.outerHTML="";
});
button3.addEventListener("mousedown", () => {
    button3.classList.remove("upgFrames");
    frame3.outerHTML="";
});
button4.addEventListener("mousedown", () => {
    button4.classList.remove("upgFrames");
    frame4.outerHTML="";
});
button5.addEventListener("mousedown", () => {
    button5.classList.remove("upgFrames");
    frame5.outerHTML="";
});
button6.addEventListener("mousedown", () => {
    button6.classList.remove("upgFrames");
    frame6.outerHTML="";
});
button7.addEventListener("mousedown", () => {
    button7.classList.remove("upgFrames");
    frame7.outerHTML="";
});
button8.addEventListener("mousedown", () => {
    button8.classList.remove("upgFrames");
    frame8.outerHTML="";
});
button9.addEventListener("mousedown", () => {
    button9.classList.remove("upgFrames");
    frame9.outerHTML="";
});
button10.addEventListener("mousedown", () => {
    button10.classList.remove("upgFrames");
    frame10.outerHTML="";
});
button11.addEventListener("mousedown", () => {
    button11.classList.remove("upgFrames");
    frame11.outerHTML="";
});
button12.addEventListener("mousedown", () => {
    button12.classList.remove("upgFrames");
    frame12.outerHTML="";
});