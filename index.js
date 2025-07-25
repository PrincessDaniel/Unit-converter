/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputNum = document.getElementById("input-num")
const convert = document.getElementById("convert-btn")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")

const inputMeter = document.getElementById("input-meter")
const inputFoot = document.getElementById("input-foot")
const inputLiter = document.getElementById("input-liter")
const inputGallon = document.getElementById("input-gallon")
const inputKilo = document.getElementById("input-kilo")
const inputPound = document.getElementById("input-pound")
const outputMeter = document.getElementById("output-meter")
const outputFoot = document.getElementById("output-foot")
const outputLiter = document.getElementById("output-liter")
const outputGallon = document.getElementById("output-gallon")
const outputKilo = document.getElementById("output-kilo")
const outputPound = document.getElementById("output-pound")

convert.addEventListener("click", function() {
    let input = inputNum.value
    let feet = inputNum.value * 3.281
    let meter = inputNum.value / 3.281
    let gallon = inputNum.value * 0.264
    let liter = inputNum.value / 0.264
    let pound = inputNum.value * 2.204
    let kilo = inputNum.value / 2.204
    if (input <= 1) {
        inputMeter.textContent = `meter`
        inputFoot.textContent = `foot`
        inputLiter.textContent = `liter`
        inputGallon.textContent = `gallon`
        inputKilo.textContent = `kilo`
        inputPound.textContent = `pound`
    }
    else {
        inputMeter.textContent = `meters`
        inputFoot.textContent = `feet`
        inputLiter.textContent = `liters`
        inputGallon.textContent = `gallons`
        inputKilo.textContent = `kilos`
        inputPound.textContent = `pounds`
    }
    
    if (feet <= 1) {
        outputFoot.textContent = `foot`
    }
    else {
        outputFoot.textContent = `feet`
    }
    
    if (meter <= 1) {
        outputMeter.textContent = `meter`
    }
    else {
        outputMeter.textContent = `meters`
    }
    
    if (gallon <= 1) {
        outputGallon.textContent = `gallon`
    }
    else {
        outputGallon.textContent = `gallons`
    }
    
    if (liter <= 1) {
        outputLiter.textContent = `liter`
    }
    else {
        outputLiter.textContent = `liters`
    }
    
    if (pound <= 1) {
        outputPound.textContent = `pound`
    }
    else {
        outputPound.textContent = `pounds`
    }
    
    if (kilo <= 1) {
        outputKilo.textContent = `kilo`
    }
    else {
        outputKilo.textContent = `kilos`
    }
    
    length.textContent = `${input} ${inputMeter.textContent} = ${feet.toFixed(3)} ${outputFoot.textContent} | ${input} ${inputFoot.textContent} = ${meter.toFixed(3)} ${outputMeter.textContent}`
    volume.textContent = `${input} ${inputLiter.textContent} = ${gallon.toFixed(3)} ${outputGallon.textContent} | ${input} ${inputGallon.textContent} = ${liter.toFixed(3)} ${outputLiter.textContent}`
    mass.textContent = `${input} ${inputKilo.textContent} = ${pound.toFixed(3)} ${outputPound.textContent} | ${input} ${inputPound.textContent} = ${kilo.toFixed(3)} ${outputKilo.textContent}`
    inputNum.value = 0
})