let slider: HTMLInputElement;
let filterType = "blur";
let unit = "px";
let max = "20";
let value = "10";

slider = <HTMLInputElement>document.querySelector("#blur-slider");
let blurValue: HTMLElement = document.getElementById("blur-value");

let overlays: NodeListOf<HTMLElement> = document.querySelectorAll(".overlay");
const radios: NodeListOf<HTMLInputElement> = document.querySelectorAll(
  'input[type="radio"]'
);

const setFilter = (event: Event) => {
  filterType = (event.target as HTMLInputElement).id;

  unit = filterType === "blur" ? "px" : "%";
  max = filterType === "blur" ? "20" : "100";

  slider.setAttribute("max", max);

  overlays.forEach(
    (overlay: HTMLElement) =>
      //@ts-ignore
      (overlay.style.backdropFilter = `${filterType}(10${unit})`)
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
