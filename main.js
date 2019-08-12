var filterType = "blur";
var unit = "px";
var max = "20";
var value = "10";
var radios = document.querySelectorAll('input[type="radio"]');
var slider = document.querySelector("#blur-slider");
var blurValue = document.getElementById("blur-value");
var overlays = document.querySelectorAll(".overlay");
var setFilter = function (event) {
    filterType = event.target.id;
    unit = filterType === "blur" ? "px" : "%";
    max = filterType === "blur" ? "20" : "100";
    slider.setAttribute("max", max);
    overlays.forEach(function (overlay) {
        //@ts-ignore
        return (overlay.style.backdropFilter = filterType + "(" + value + unit + ")");
    });
};
slider.addEventListener("input", function () {
    value = slider.value;
    blurValue.innerHTML = "" + value + unit;
    overlays.forEach(function (overlay) {
        //@ts-ignore
        return (overlay.style.backdropFilter = filterType + "(" + value + unit + ")");
    });
});
radios.forEach(function (radio) {
    radio.addEventListener("click", function (event) { return setFilter(event); });
});
