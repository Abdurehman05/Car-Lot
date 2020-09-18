import { CarHTML } from "./Car.js";
import { getCars, useCars } from "./CarProvider.js";

const eventHub = document.querySelector(".container");

eventHub.addEventListener("colorChosen", event => {
    const contentTarget = document.querySelector("#colorSelect");
    console.log("What color is selected?", contentTarget.value);
    if (event.detail.colorThatWasChosen !== "0") {
        const matchingCars = useCars().filter(singleCar => {
            return singleCar.colorId === parseInt(event.detail.colorThatWasChosen);
        });
        addCarsToDom(matchingCars);
    } else {
        addCarsToDom(useCars());
    }
});

export const CarList = () => {
    getCars().then(() => {
        const carArray = useCars();
        console.log("CarArray", carArray);
        addCarsToDom(carArray);
    });
};

const addCarsToDom = aCarArray => {
    const domElement = document.querySelector(".car-container");

    let HTMLArray = aCarArray
        .map(singleCar => {
            return CarHTML(singleCar);
        })
        .join("");
    domElement.innerHTML = HTMLArray;
};