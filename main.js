document.addEventListener("DOMContentLoaded", function () {
    console.log("loaded");
    var slider = (document.querySelector("#blur-slider"));
    var blurValue = document.getElementById("blur-value");
    var overlays = document.querySelectorAll(".overlay");
    slider.addEventListener("input", function () {
        var value = slider.value;
        blurValue.innerHTML = value + "px";
        overlays.forEach(function (overlay) {
            //@ts-ignore
            overlay.style.backdropFilter = "blur(" + value + "px)";
        });
    });
});
