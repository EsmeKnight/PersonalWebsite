
const colors = [
    "#2bcded",
    "#e615e6",
    "#35d438",
    "#ff9c24",
    "#edea45",
    "#9299fc",
];

function randomPostion() {
    return Math.round(Math.random() * 40);
}

function move(element) {
    var topAddMinusBool = Math.random() < 0.5;
    var leftAddMinusBool = Math.random() < 0.5;
    var elstyle = window.getComputedStyle(element);
    var opacityValue = elstyle.getPropertyValue("opacity").replace("%", "");
    var topValue = elstyle.getPropertyValue("top").replace("px", "");
    var leftValue = elstyle.getPropertyValue("left").replace("px", "");
    element.style.background = colors[Math.round(Math.random() * 6)];
    element.style.opacity = "0.3";
    var topDestination;
    var leftDestination;
    if (topAddMinusBool) {
        //topDestination = (Number(topValue) + randomPostion()) + "px";
        element.style.top = Number(topValue) + randomPostion() + "px";
    } else {
        //topDestination = (Number(topValue) - randomPostion()) + "px";
        element.style.top = Number(topValue) - randomPostion() + "px";
    }

    if (leftAddMinusBool) {
        //leftDestination = (Number(leftValue) + randomPostion()) + "px";
        element.style.left = Number(leftValue) + randomPostion() + "px";
    } else {
        //leftDestination = (Number(leftValue) - randomPostion()) + "px";
        element.style.left = Number(leftValue) - randomPostion() + "px";
    }

    function fadeElement() {
        if (elstyle.getPropertyValue("opacity") == 0) {
            clearInterval(fadingFrames);
        } else {
            elstyle = window.getComputedStyle(element);
            opacityValue = elstyle.getPropertyValue("opacity");
            element.style.opacity = (Number(opacityValue) - 0.05);
        }
    }

    var fadingFrames = setInterval(fadeElement, 5000);
}

function addBubble(event) {
    var x = (event.clientX * 100) / window.innerWidth + "%";
    var y = (event.clientY * 100) / window.innerHeight + "%";

    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.style.left = x;
    bubble.style.top = y;
    document.getElementById("root").appendChild(bubble);

    setTimeout(() => {
        move(bubble);
    }, 50);
    setTimeout(() => {
        bubble.remove();
    }, 1000);
}

document.addEventListener("mousemove", function (event) {
    if (Math.random() > 0.55) {
        addBubble(event);
    }
});