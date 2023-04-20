const scrollerWidth = document.getElementById("scroller").offsetWidth;
const scrollerHeight = document.getElementById("scroller").offsetHeight;


window.onload = function () {
    document.getElementById("scroller").style.backgroundImage = `url(https://placehold.co/${scrollerWidth}x${scrollerHeight})`;
};