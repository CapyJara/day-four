function handleSubmit(event) {
    var form = event.target;
    var elements = form.elements;
    var guess = elements.guess.value;
    var result = document.getElementById('result');

    var numAnimals = 4;

    if(guess == numAnimals){
        result.textContent = 'you guessed right, smawt mutha trucker';
        console.log("you guessed", guess, ', you guessed right, smawt mutha trucker');
        }
    else if(guess < numAnimals) {
        result.textContent = 'you guessed to low sucka, guess again';
        console.log("you guessed", guess, ', you guessed to low sucka, guess again');
        }
    else {
        result.textContent = 'you guessed to high silly, do better!';
        console.log("you guessed", guess, ', you guessed to high silly, do better!');
        }

}


