/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const metersToFeet = 1/3.281
const litersToGallon = 1/0.264
const kgToPound = 1/2.204

const containerEl = document.querySelector(".container-el");
const converterBtn = document.getElementById("converter-btn");
const lengthBox = document.getElementById("length-box");
const volumeBox = document.getElementById("volume-box");
const massBox = document.getElementById("mass-box");
let inputEl = document.getElementById("input-el");

const containers = [lengthBox, volumeBox, massBox];
const conversionArr = [metersToFeet, litersToGallon, kgToPound];
const firstUnits = ["meters", "liters", "kilograms"];
const secondUnits = ["feet", "gallons", "pounds"];
const titles = ["Length", "Volume", "Mass"];
const capitalized1 = ["Meters", "Liters", "Kilograms"];
const capitalized2 = ["Feet", "Gallons", "Pounds"];

function clearNum() {
    inputEl.value = null;
    for (i = 0; i < containers.length; i++) {
        containers[i].innerHTML = `
        <h4>${titles[i]} (${capitalized1[i]}/${capitalized2[i]})
        `
    }
}

function conversion1(convert) {
    let firstConversion = inputEl.value * convert;
    return firstConversion.toFixed(3);
}

function conversion2(convert) {
    let secondConversion = inputEl.value / convert;
    return secondConversion.toFixed(3);

}

converterBtn.addEventListener('click', function() {
   
    render();
});

function render() {
    let pVar = "";
    for (i = 0; i < conversionArr.length; i++) {
        pVar = `
        <h4>${titles[i]} (${firstUnits[i]}/${secondUnits[i]})</h4>
        <p> ${inputEl.value} ${firstUnits[i]} = ${conversion2(conversionArr[i])} ${secondUnits[i]} 
        | ${inputEl.value} ${secondUnits[i]} = ${conversion1(conversionArr[i])} ${firstUnits[i]} </p>
        `
        containers[i].innerHTML = pVar;
       
    }
    

}



