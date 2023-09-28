console.log(localStorage)

const result = document.querySelector('.result')
const weightStatus = document.querySelector('.status')
const comment = document.querySelector('.comment')
result.textContent = localStorage.getItem('result')
console.log(comment, weightStatus )

if (result.textContent <= 18.5) {
    comment.textContent = 'You are underweight'
    weightStatus.textContent = 'Underweight'
} else if  (result.textContent <= 25) {
    comment.textContent = 'You are Healthy'
    weightStatus.textContent = 'Normal'
} else if (result.textContent <= 30) {
    comment.textContent = 'You are overweight'
    weightStatus.textContent = 'overweight'
} else {
    {
        comment.textContent = 'You are Obese'
        weightStatus.textContent = 'Obese'
    }
}