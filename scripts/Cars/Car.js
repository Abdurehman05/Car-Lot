export const CarHTML = carObj => {
    return `
    <section class="card-car">
        <h3>Name: ${carObj.name} </h3>
        <p>MPG: ${carObj.milesPerGallon} </p>
        <p>Year: ${carObj.year} </p>
    </section>    
    `;
};