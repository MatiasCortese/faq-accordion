
// Save questions
const questions = document.getElementsByClassName("question")
const arrow = document.getElementById('arrow')

// We loop through the array of questions so we can add an event listener on each question and set a function as response to the event
Array.from(questions).forEach(question => {
    question.addEventListener('click', open)
})

// This function manages the answer and the arrow
function open(event) {
    Array.from(questions).forEach(question => {
        // If the question clicked is the one we are looping through
        if (event.target.innerHTML == question.innerHTML) {
            // If the question clicked doesn't have active class
            if (!question.classList.contains('active'))
            {
                // Add active state to the question
                question.classList.toggle("active")
                // 
                // Add shown state to the answer
                question.nextElementSibling.classList.toggle('shown')
                // Turn arrow looking up
            } 
            // If the question clicked already has active class
            else {
                // Remove question active state
                question.classList.toggle('active')
                // Remove answer shown state
                question.nextElementSibling.classList.toggle('shown') 
                // Turn arrow looking down again
            }
        }
    })
}

