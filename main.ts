document.addEventListener("DOMContentLoaded", () => {
  console.log("loaded");
  let slider: HTMLInputElement = <HTMLInputElement>(
    document.querySelector("#blur-slider")
  );
  let blurValue: HTMLElement = document.getElementById("blur-value");

  let overlays: NodeListOf<HTMLElement> = document.querySelectorAll(".overlay");

  slider.addEventListener("input", () => {
    const value: string = slider.value;
    blurValue.innerHTML = `${value}px`;
    overlays.forEach((overlay: HTMLElement) => {
      //@ts-ignore
      overlay.style.backdropFilter = `blur(${value}px)`;
    });
  });
});
