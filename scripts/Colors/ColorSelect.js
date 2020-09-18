import { useColors, getAvailableColors } from "./ColorsProvider.js";

const eventHub = document.querySelector(".container");

eventHub.addEventListener("change", event => {
    if (event.target.id === "colorSelect") {
        const customEvent = new CustomEvent("colorChosen", {
            detail: {
                colorThatWasChosen: event.target.value
            }
        });
        eventHub.dispatchEvent(customEvent);
    }
});

const contentTarget = document.querySelector(".filters__car");

export const ColorSelect = () => {
    getAvailableColors().then(() => {
        const colorsArray = useColors();
        render(colorsArray);
    });
};

const render = theColorsArray => {
        contentTarget.innerHTML = `
    <select class="dropdown" id="colorSelect">
        <option value="0">Please select a color ...</option>
        ${theColorsArray
          .map(colorObj => {
            return `<option value="${colorObj.id}">${colorObj.color}</option>`;
          })
          .join("")}
    </select>
    `;
};