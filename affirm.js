document.addEventListener('DOMContentLoaded', () => {
    const affirmations = [
        "You are capable of achieving great things.",
        "Believe in yourself and all that you are.",
        "Your potential is limitless.",
        "You are stronger than you think.",
        "Every day is a new opportunity.",
        "You are worthy of all the good things in life.",
        "Believe in your dreams and they will come true.",
        "You have the power to create your own happiness.",
        "You are enough just as you are.",
        "Your positive thoughts create your reality."
    ];

    const affirmationElement = document.getElementById('affirmation');
    const newAffirmationButton = document.getElementById('newAffirmationButton');

    function getRandomAffirmation() {
        const randomIndex = Math.floor(Math.random() * affirmations.length);
        return affirmations[randomIndex];
    }

    function displayAffirmation() {
        affirmationElement.textContent = getRandomAffirmation();
    }

    newAffirmationButton.addEventListener('click', displayAffirmation);

    // Display a new affirmation on page load
    displayAffirmation();
});
