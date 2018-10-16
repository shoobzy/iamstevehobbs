var scroll = 1;
var currentScale = 1;
var lastUpdateTime = new Date();
var targetScale;
var zoomTime = .3; // ~ number of seconds to reach the expected zoom for the current scroll position
var endScrollHeight = window.innerHeight / 250; // in px
var expander = document.querySelector(".Hero");

// user input
window.addEventListener('scroll', function (event) {
if (expander === null) {
    expander = document.querySelector(".Hero");
}
scroll = window.scrollY;
    var rate = scroll / endScrollHeight;
    targetScale = 1 + (scrollY / 1000) * rate;
});

// update once per frame
setInterval(onTimerTick, 32);

function onTimerTick() {
if (expander === null) {
    return;
}

// make sure we're tracking how much time's elapsed
    var currentTime = new Date();
    var timeDelta = currentTime - lastUpdateTime;
    lastUpdateTime = currentTime;

    var newScale = lerp(currentScale, targetScale, ((timeDelta / 1000) / zoomTime));
    currentScale = newScale;

    //expand / contract
    expander.setAttribute("style", "transform: scale(" + newScale + ") translateZ(0);");
}

function lerp(current, target, fraction) {
    var result = current + fraction * (target - current);

    if (result < 1 || isNaN(result)) {
        return 1;
    } else {
        return result;
    }
}
