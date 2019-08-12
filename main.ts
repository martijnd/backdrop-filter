let filterType = "blur";
let unit = "px";
let max = "20";
let value = "10";

const radios: NodeListOf<HTMLInputElement> = document.querySelectorAll(
  'input[type="radio"]'
);
const slider: HTMLInputElement = document.querySelector("#blur-slider");
const blurValue: HTMLElement = document.getElementById("blur-value");
const overlays: NodeListOf<HTMLElement> = document.querySelectorAll(".overlay");

const setFilter = (event: Event) => {
  filterType = (event.target as HTMLInputElement).id;

  unit = filterType === "blur" ? "px" : "%";
  max = filterType === "blur" ? "20" : "100";

  slider.setAttribute("max", max);

  overlays.forEach(
    (overlay: HTMLElement) =>
      //@ts-ignore
      (overlay.style.backdropFilter = `${filterType}(${value}${unit})`)
  );
};

slider.addEventListener("input", () => {
  value = slider.value;
  blurValue.innerHTML = `${value}${unit}`;
  overlays.forEach(
    (overlay: HTMLElement) =>
      //@ts-ignore
      (overlay.style.backdropFilter = `${filterType}(${value}${unit})`)
  );
});

radios.forEach((radio: HTMLInputElement) => {
  radio.addEventListener("click", (event: Event) => setFilter(event));
});
