// var btns = document.getElementById("btns");
// var chance = document.getElementById("here");
var wrapper = document.getElementById("wrapper")
var btn = document.getElementById("btn");
var btns = document.getElementById("btns");

btn.addEventListener('click', function (event) {
    event.preventDefault();
    if (!wrapper.classList.contains('here')) {
        wrapper.classList.add("here");
        btn.innerHTML = "mobile"
    } else {
        wrapper.classList.remove("here");
        btn.innerHTML = "desktop"
    }
}, false);
if (document.documentElement.clientWidth < 375) {
    btns.style.display = "none"
}
window.addEventListener("resize", function() {
    if (document.documentElement.clientWidth < 375) {
        btns.style.display = "none"
    }
    if (document.documentElement.clientWidth > 375) {
        btns.style.display = "flex"
    }
});