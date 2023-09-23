// pounds = 1k/2.2
// 1 ft = 12 inches
// 1 meter = 39.37 inches
// 1 meter = 3.28 ft
// BMI = weight/(height **2)

const height = document.querySelector('.range-value')
const age = document.querySelector('.age-value')
const range = document.querySelector('.height-range')
const weight = document.querySelector('.weight-value')
const addWeight = document.querySelector('.add')
const minusWeight = document.querySelector('.minus')
const addAge = document.querySelector('.add-age')
const minusAge = document.querySelector('.minus-age')
function updateHeight () {
        height.innerHTML = range.value
}
range.addEventListener('mousemove', updateHeight)
console.log(weight.textContent)

function doMath (element, op) {
    if (op === 'add') {
        element.innerHTML = Number(element.innerHTML) + 1
    } else {
        if (Number(element.innerHTML) === 0) {
            element.innerHTML = 0
        } else {
            element.innerHTML = Number(element.innerHTML) - 1
        }
    }
}

addWeight.addEventListener('click', () => doMath(weight, 'add'))
minusWeight.addEventListener('click', () => doMath(weight, 'minus'))
addAge.addEventListener('click', () => doMath(age, 'add'))
minusAge.addEventListener('click', () => doMath(age, 'minus'))



// function convertToKg (weightdata, measurement) {
//     let weight = 0
//     if (measurement === 'kg') {
//         weight = weightdata

//     } else if (measurement === 'lbs') {
//         weight = weightdata /2.2
//     } 
//     return weight
// }

// function convertToMeter (heightData, heightmeasurement) {
//     let height = 0
//     if (heightmeasurement === 'meter')  {
//         height = heightData
//     } else if (heightmeasurement === 'inches') {
//         height = heightData * .0254
//     } else if (heightmeasurement === 'feet') {
//         height = heightData * 0.3048
//     }
//     return height
// }

// console.log(convertToMeter(heightInput, 'feet'))
// console.log(convertToKg(weightInput, 'kg'))

// function yourBMI (heightData, weightdata, heightmeasurement, weightmeasurement) {
//     let meter = convertToMeter(heightData, heightmeasurement)
//     let kg = convertToKg(weightdata, weightmeasurement)


//     const BMI = kg / (meter * meter)
//     return BMI
// }

// console.log(yourBMI(heightInput, weightInput, 'feet', 'kg'))

// // let meter = convertToMeter(10.8, 'feet')
// // let kg = convertToKg(70, 'kg')
// // const BMI = kg / (meter * meter)
// // console.log(BMI)

// button.addEventListener('click', () => {
//     result.innerHTML = yourBMI(heightInput, weightInput, 'meter', 'kg')

// })

