function play() {
    const startButton = document.getElementById("startButton");
    const startScreen = document.getElementById("startScreen");
    startButton.style.boxShadow = "0rem 0rem 5rem rgba(0, 255, 0, 1)";
    startScreen.style.opacity = "0";
    startScreen.style.transition = "all 650ms ease-out 300ms";
    startScreen.style.zIndex = "0";
};

function menu() {
    menuContainer.style.display = "flex";
};
function quitMenu() {
    menuContainer.style.display = "none";
};

const minimizeSideBar = () => {
    valchange()
    const mini = document.getElementById('sideBar');
    const miniButton = document.getElementById('closeSideBar');
    if (val) {
        mini.style.left = "-21rem";
        mini.style.borderRightColor = "rgba(0, 0, 0, 0";
        mini.style.borderBottomColor = "rgba(0, 0, 0, 0";
        miniButton.innerHTML = "→";
    }
    else {
        mini.style.left = "0rem";
        miniButton.innerHTML = "←";
        mini.style.borderRightColor = "rgb(0, 255, 0";
        mini.style.borderBottomColor = "rgb(0, 255, 0";
    };
};

document.getElementById("upgButton1").addEventListener('mouseover', () => {
    const upgTooltip = document.getElementById('upgTooltip');
    if (upgTooltip) {
        upgTooltip.style.opacity = "1";
        upgTooltip.style.transition = "all 300ms ease-in-out 700ms";
    };
});
document.getElementById("upgButton1").addEventListener('mouseout', () => {
    const upgTooltip = document.getElementById('upgTooltip');
    if (upgTooltip) {
        upgTooltip.style.opacity = "0";
        upgTooltip.style.transition = "none";
    };
});
document.getElementById("dataUnit").addEventListener('mouseover', () => {
    const unitTooltip = document.getElementById('unitTooltip');
    if (unitTooltip) {
        unitTooltip.style.opacity = "1";
        unitTooltip.style.transition = "all 300ms ease-in-out 700ms";
    };
});
document.getElementById("dataUnit").addEventListener('mouseout', () => {
    const unitTooltip = document.getElementById('unitTooltip');
    if (unitTooltip) {
        unitTooltip.style.opacity = "0";
        unitTooltip.style.transition = "none";
        
    };
});
document.getElementById("logo").addEventListener('mouseover', () => {
    const logoTooltip = document.getElementById('logoTooltip');
    if (logoTooltip) {
        logoTooltip.style.opacity = "1";
        logoTooltip.style.transition = "all 300ms ease-in-out 700ms";
    };
});
document.getElementById("logo").addEventListener('mouseout', () => {
    const logoTooltip = document.getElementById('logoTooltip');
    if (logoTooltip) {
        logoTooltip.style.opacity = "0";
        logoTooltip.style.transition = "none";
        
    };
});

const screenFollow = document.getElementById("container");
document.addEventListener('mousemove', (e) => {
    const x = e.clientX - screenFollow.offsetWidth / 2;
    const y = e.clientY - screenFollow.offsetWidth / 10;
    screenFollow.style.transform = `translate(${x/200}px, ${y/200}px)`;
});
const navigationFollow = document.getElementById("clicker");
document.addEventListener('mousemove', (e) => {
    const x = e.clientX - navigationFollow.offsetWidth * 3.3;
    const y = e.clientY - navigationFollow.offsetWidth / 10;
    navigationFollow.style.transform = `translate(${x/180}px, ${y/150}px)`;
});

document.getElementById("clicker").addEventListener('mouseover', () => {
    const clickerInteract = document.getElementById('clicker');
    if (clickerInteract) {
    };
});
document.getElementById("clicker").addEventListener('mouseout', () => {
    const clickerInteract = document.getElementById('clicker');
    if (clickerInteract) {
    };
});
document.getElementById("clicker").addEventListener('mousedown', () => {
    const clickerInteract = document.getElementById('clicker');
    if (clickerInteract) {
        clickerInteract.style.borderTopWidth = "1rem";
        clickerInteract.style.borderBottomWidth = "1rem";
        clickerInteract.style.borderLeftWidth = "2rem";
        clickerInteract.style.borderRightWidth = "2rem";
    };
});
document.getElementById("clicker").addEventListener('mouseup', () => {
    const clickerInteract = document.getElementById('clicker');
    if (clickerInteract) {
        clickerInteract.style.borderTopWidth = "2px";
        clickerInteract.style.borderBottomWidth = "2px";
        clickerInteract.style.borderLeftWidth = "2px";
        clickerInteract.style.borderRightWidth = "2px";
    };
});