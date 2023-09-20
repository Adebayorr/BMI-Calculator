// pounds = 1k/2.2
// 1 ft = 12 inches
// 1 meter = 39.37 inches
// 1 meter = 3.28 ft
// BMI = weight/(height **2)
const weight = document.querySelector('.weight')
const height = document.querySelector('.height')
const weightOption = document.querySelectorAll('.weight-child')
const heightOption = document.querySelectorAll(".height-option")
const result = document.querySelector('.result')
const button = document.querySelector('button')



console.log(height, weight, weightOption, heightOption)

let weightInput;

weight.addEventListener('keyup', (e) => {
    weightInput = Number(e.target.value)
    console.log(weightInput)
})

let heightInput = 10.8

height.addEventListener('keyup', (e) => {
    heightInput = Number(e.target.value)
    console.log(heightInput)
})



function convertToKg (weightdata, measurement) {
    let weight = 0
    if (measurement === 'kg') {
        weight = weightdata

    } else if (measurement === 'lbs') {
        weight = weightdata /2.2
    } 
    return weight
}

function convertToMeter (heightData, heightmeasurement) {
    let height = 0
    if (heightmeasurement === 'meter')  {
        height = heightData
    } else if (heightmeasurement === 'inches') {
        height = heightData * .0254
    } else if (heightmeasurement === 'feet') {
        height = heightData * 0.3048
    }
    return height
}

console.log(convertToMeter(heightInput, 'feet'))
console.log(convertToKg(weightInput, 'kg'))

function yourBMI (heightData, weightdata, heightmeasurement, weightmeasurement) {
    let meter = convertToMeter(heightData, heightmeasurement)
    let kg = convertToKg(weightdata, weightmeasurement)


    const BMI = kg / (meter * meter)
    return BMI
}

console.log(yourBMI(heightInput, weightInput, 'feet', 'kg'))

// let meter = convertToMeter(10.8, 'feet')
// let kg = convertToKg(70, 'kg')
// const BMI = kg / (meter * meter)
// console.log(BMI)

button.addEventListener('click', () => {
    result.innerHTML = yourBMI(heightInput, weightInput, 'meter', 'kg')

})

