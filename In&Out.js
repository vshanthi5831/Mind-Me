const circle = document.querySelector('.circle'); 
const instruction = document.getElementById('instruction'); 
const startButton = document.getElementById('startButton'); 
const stopButton = document.getElementById('stopButton');

let breathingInterval; 

document.getElementById('startButton').addEventListener('click', startBreathingExercise);
document.getElementById('stopButton').addEventListener('click', stopBreathingExercise);

function startBreathingExercise() {
    clearInterval(breathingInterval);
    let isBreathingIn = true; 
    
    breathingInterval = setInterval(() => {
        if (isBreathingIn) {
            circle.style.transform = 'scale(1.5)'; 
            instruction.textContent = 'Breathe In...'; 
        } else {
            circle.style.transform = 'scale(1)'; 
            instruction.textContent = 'Breathe Out...'; 
        }
        isBreathingIn = !isBreathingIn; 
    }, 4000); 
}

function stopBreathingExercise() {
    clearInterval(breathingInterval);
    circle.style.transform = 'scale(1)';
    instruction.textContent = "Exercise stopped";
}

// startButton.addEventListener('click', () => {
//     if (breathingInterval) {
//         clearInterval(breathingInterval);
//     }
//     startBreathingExercise();
// });
