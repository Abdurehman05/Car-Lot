// This is the fetch URL to get an array of available colors
const availableColorsURL =
    "https://gist.githubusercontent.com/AdamSheaffer/242f907515474ab081b5a49971bd51f4/raw/fb61fc45a3676a67f7fb5634b987a8f7393b453c/colors.json";

let availableColors = [];

export const useColors = () => {
    return availableColors.slice();
};

export const getAvailableColors = () => {
    return fetch(availableColorsURL)
        .then(res => res.json())
        .then(parsedRes => {
            availableColors = parsedRes;
        });
};