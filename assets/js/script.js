/* Question list */
let question = {
    id : 1,
    idiom : "Der Koch war verliebt",
    literal_translation : "The cook was in love",
    meaning1 : "To get an extra portion",
    meaning2 : "The meal is too salty",
    meaning3 : "To find a hair in your meal",
    meaning4 : "The meal is already cold",
    correct_meaning : "The meal is too salty",
    english_equivalent: ""
    }
    
/* Start game funtion */

/* End game function */

/* Check answer function */

/* Display question function */

function displayQuestion(q){
    /* Select the question div from the DOM */
    let questionContainer = document.getElementById("question-container")
    /* Modify question div */
    questionContainer.textContent = q.idiom;
}

displayQuestion(question)


/* Display possible answers */

/* Randomise question function */
/* (Ensure the question has not already been asked) */


