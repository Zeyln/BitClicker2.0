let data_player = 0;
let data_base_click = 1;
let data_base_sec = 0;
let data_multi = 1;
let data_click = data_base_click * data_multi;
let data_sec = data_base_sec * data_multi;

const cost1 = 100;
const cost2 = 220;
const cost3 = 600;
const cost4 = 1600;
const cost5 = 4000;
const cost6 = 5000;
const cost7 = 50000;
const cost8 = 200000;
const cost9 = 600000;
const cost10 = 1200000;
const cost11 = 5000000;
const cost12 = 25000000;
const cost13 = 100000000;
const cost14 = 200000000;

const bitClick = document.getElementById('clicker');
const bitDisplay = document.getElementById('dataValue');
const bitUnit = document.getElementById('dataUnit');
const ifClicked = document.getElementById('clicker');
const menuContainer = document.getElementById('menuContainer');
let unlock = 0;

val = false
function valchange() {
    if (val == false) {
        val = true
    }
    else {
        val = false
    };
};

const clicked = () => {
    data_player += data_click;
};


function formatting() {
        // console.log(data_player)
    if  (data_player < 1) {
        bitDisplay.textContent = Math.floor(data_player * 1) / 1;
        bitUnit.textContent = `bits`;
    }
    else if  (data_player < 2) {
        bitDisplay.textContent = Math.floor(data_player * 1) / 1;
        bitUnit.textContent = `bit`;
    }
    else if (data_player < 1000) {
        bitDisplay.textContent = Math.floor(data_player * 1) / 1;
        bitUnit.textContent = `bits`;
    }
    else if (data_player < 1000000 && data_player >= 1000) {
        bitDisplay.textContent = Math.floor((data_player / 1000) * 100) / 100;
        bitUnit.textContent = `Kilobits`;
    }
    else if (data_player < 1000000000 && data_player >= 1000000) {
        bitDisplay.textContent = Math.floor((data_player / 1000000) * 100) / 100;
        bitUnit.textContent = `Gigabits`;
    }
    else if (data_player < 1000000000000 && data_player >= 1000000000) {
        bitDisplay.textContent = Math.floor((data_player / 1000000000) * 100) / 100;
        bitUnit.textContent = `Terabits`;
    }
    else if (data_player < 1000000000000000 && data_player >= 1000000000000) {
        bitDisplay.textContent = Math.floor((data_player / 1000000000000) * 100) / 100;
        bitUnit.textContent = `Petabits`;
    }
    else if (data_player < 1000000000000000000 && data_player >= 1000000000000000) {
        bitDisplay.textContent = Math.floor((data_player / 1000000000000000) * 100) / 100;
        bitUnit.textContent = `Exabits`;
    }
    else if (data_player < 1000000000000000000000 && data_player >= 1000000000000000000) {
        bitDisplay.textContent = Math.floor((data_player / 1000000000000000000) * 100) / 100;
        bitUnit.textContent = `Zettabits`;
    };
};

function upgradesUnlock() {
    const upgAvailable = document.getElementById("upgAvailable");
    const upgUntil = document.getElementById("upgUntil");
    const unlockTooltip = document.getElementById('unlockTooltip');
    const upgrade1 = document.getElementById("upgFrame1");
    const upgrade2 = document.getElementById("upgFrame2");
    const upgrade3 = document.getElementById("upgFrame3");
    const upgrade4 = document.getElementById("upgFrame4");
    const upgrade5 = document.getElementById("upgFrame5");
    const upgrade6 = document.getElementById("upgFrame6");
    const upgrade7 = document.getElementById("upgFrame7");
    const upgrade8 = document.getElementById("upgFrame8");
    const upgrade9 = document.getElementById("upgFrame9");
    const upgrade10 = document.getElementById("upgFrame10");
    const upgrade11 = document.getElementById("upgFrame11");
    const upgrade12 = document.getElementById("upgFrame12");
    const upgrade13 = document.getElementById("upgFrame13");
    const upgrade14 = document.getElementById("upgFrame14");
    upgUntil.textContent = 50 - ((data_player) * 100) / 100;
    while (data_player >= 50 && upgrade1) {
        upgrade1.style.display = "flex";
        
        if (val && unlock === 0) {
            minimizeSideBar()
            unlock += 1
        }
        else {
            unlock += 1
        };
        if (data_player < cost1) {
            upgrade1.style.opacity = "0.5";
            upgrade1.style.pointerEvents = "none";
        }
        else {
            upgrade1.style.opacity = "1";
            upgrade1.style.pointerEvents = "auto";
        };
        upgUntil.textContent = 150 - data_player;
        break
    }
    while (data_player >= 150 && upgrade2) {
        upgrade2.style.display = "flex";
        if (data_player < cost2) {
            upgrade2.style.opacity = "0.5";
        }
        else {
            upgrade2.style.opacity = "1";
        };
        upgUntil.textContent = 300 - data_player;
        break
    }
    while (data_player >= 300 && upgrade3) {
        upgrade3.style.display = "flex";
        if (data_player < 600) {
            upgrade3.style.opacity = "0.5";
        }
        else {
            upgrade3.style.opacity = "1";
        };
        upgUntil.textContent = 1000 - data_player;
        break
    }
    while (data_player >= 1000 && upgrade4) {
        upgrade4.style.display = "flex";
        if (data_player < 1600) {
            upgrade4.style.opacity = "0.5";
        }
        else {
            upgrade4.style.opacity = "1";
        };
        upgUntil.textContent = 2500 - data_player;
        break
    }
    while (data_player >= 2500 && upgrade5) {
        upgrade5.style.display = "flex";
        if (data_player < 4000) {
            upgrade5.style.opacity = "0.5";
        }
        else {
            upgrade5.style.opacity = "1";
        };
        upgUntil.textContent = 2500 - data_player;
        break
    }
    while (data_player >= 2500 && upgrade6) {
        upgrade6.style.display = "flex";
        if (data_player < 5000) {
            upgrade6.style.opacity = "0.5";
        }
        else {
            upgrade6.style.opacity = "1";
        };
        upgUntil.textContent = 7500 - data_player;
        break
    }
    while (data_player >= 7500 && upgrade7) {
        upgrade7.style.display = "flex";
        if (data_player < 50000) {
            upgrade7.style.opacity = "0.5";
        }
        else {
            upgrade7.style.opacity = "1";
        };
        upgUntil.textContent = 20000 - data_player;
        break
    }
    while (data_player >= 20000 && upgrade8) {
        upgrade8.style.display = "flex";
        if (data_player < 200000) {
            upgrade7.style.opacity = "0.5";
        }
        else {
            upgrade7.style.opacity = "1";
        };
        upgUntil.textContent = 60000 - data_player;
        break
    }
    while (data_player >= 20000 && upgrade9) {
        upgrade9.style.display = "flex";
        upgUntil.textContent = 60000 - data_player;
        break
    }
    while (data_player >= 60000 && upgrade10) {
        upgrade10.style.display = "flex";
        upgUntil.textContent = 150000 - data_player;
        break
    }
    while (data_player >= 150000 && upgrade11) {
        upgrade11.style.display = "flex";
        upgUntil.textContent = 60000 - data_player;
        break
    }
    while (data_player >= 150000 && upgrade12) {
        upgrade12.style.display = "flex";
        upgUntil.textContent = 60000 - data_player;
        break
    }
    while (data_player >= 150000 && upgrade13) {
        upgrade13.style.display = "flex";
        upgUntil.textContent = 60000 - data_player;
        break
    }
    while (data_player >= 150000 && upgrade14) {
        upgrade14.style.display = "flex";
        upgUntil.textContent = 60000 - data_player;
        break
    };
};
function game_loop() {
    ifClicked.addEventListener('click', clicked);
    data_sec = data_base_sec * data_multi;
    data_player += data_sec / 10;
    formatting()
    upgradesUnlock()
};
const intervalId = setInterval(game_loop, 100);
