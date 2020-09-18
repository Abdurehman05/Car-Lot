import { useColors, getAvailableColors } from "./ColorsProvider.js";

const eventHub = document.querySelector(".container");

// eventHub.addEventListener("change", event => {

// })

export const ColorSelect = () => {
    getAvailableColors().then(() => {
        const colorsArray = useColors();
        render(colorsArray);
    });
};
const contentTarget = document.querySelector(".filters__car");
const render = theColorsArray => {
        contentTarget.innerHTML = `
    <select class="dropdown" id="colorSelect">
        <option value="0">Please select a color ...</option>
        ${theColorsArray
          .map(colorObj => {
            return `<option value="${colorObj.color}">${colorObj.color}</option>`;
          })
          .join("")}
    </select>
    `;
};