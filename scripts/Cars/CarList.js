import { CarHTML } from "./Car.js";
import { getCars, useCars } from "./CarProvider.js";

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