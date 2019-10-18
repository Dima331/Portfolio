var wrapper = document.getElementById("wrapper")
var btn = document.getElementById("btn");
var btns = document.getElementById("btns");

btn.addEventListener('click', function (event) {
    event.preventDefault();
    if (!wrapper.classList.contains('size')) {
        wrapper.classList.add("size");
        btn.innerHTML = "desktop"
    } else {
        wrapper.classList.remove("size");
        btn.innerHTML = "mobile"
    }
}, false);
window.addEventListener("resize", function() {
    if (document.documentElement.clientWidth < 375) {
        btns.style.display = "none"
    }
    if (document.documentElement.clientWidth > 375) {
        btns.style.display = "flex"
    }
});