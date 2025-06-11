function checkAnswer() {
    const correctAnswer = "4"; // Step 1: Define correct answer

    // Step 2: Get the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    if (selectedOption) {
        const userAnswer = selectedOption.value;

        // Step 3: Compare user answer and provide feedback
        const feedbackElement = document.getElementById("feedback");
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
        }
    } else {
        // No option selected
        document.getElementById("feedback").textContent = "Please select an answer before submitting.";
    }
}

// Step 4: Add event listener to the Submit Answer button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
