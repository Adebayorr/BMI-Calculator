const height = document.querySelector('.range-value')
const age = document.querySelector('.age-value')
const range = document.querySelector('.height-range')
const weight = document.querySelector('.weight-value')
const addWeight = document.querySelector('.add')
const minusWeight = document.querySelector('.minus')
const addAge = document.querySelector('.add-age')
const minusAge = document.querySelector('.minus-age')
const button = document.querySelector('.result-btn')

function updateHeight () {
        height.value = range.value
        console.log(height.value)
}
range.addEventListener('input', updateHeight)
console.log(weight.textContent)

function doMath (element, op) {
    if (op === 'add') {
        element.value = Number(element.value) + 1
        console.log(element.value)
    } else {
        if (Number(element.value) === 0) {
            element.value = 0
        } else {
            element.value = Number(element.value) - 1
            console.log(element)
        }
    }
}

addWeight.addEventListener('click', () => doMath(weight, 'add'))
minusWeight.addEventListener('click', () => doMath(weight, 'minus'))
addAge.addEventListener('click', () => doMath(age, 'add'))
minusAge.addEventListener('click', () => doMath(age, 'minus'))


function yourBMI (height, weight) {
    const BMI = Math.floor((weight / ((height * height))) * 10000)
    return BMI
}

button.addEventListener('click', () => {
    const BMI = yourBMI(Number(height.value), Number(weight.value))
    localStorage.setItem('result', BMI)
})
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
