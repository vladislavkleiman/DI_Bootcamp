//part 1

function playTheGame() {
    let question = confirm('Do u wanna play?')
    if (question == true) {
        alert('lets play');
        let userNumber = Number(prompt('Please enter a number between 0 and 10'))
        if (userNumber == '' || isNaN(userNumber) == true){
            alert('no right')
        } else if (userNumber < 0 || userNumber > 10){
            alert('Sorry it’s not a good number, Goodbye')
        } else {
            let computerNumber = Math.floor(Math.random() * 11);
            compareNumbers(userNumber, computerNumber)
        }     
    } else {
        alert('No problem, Goodbye');
    }
}

playTheGame()


//part 2

function compareNumbers(userNumber,computerNumber) {
   if (userNumber === computerNumber) {
    alert('WINNER')
   } else {
    for (let i = 0; i < 2; i++){
        if (userNumber > computerNumber){
            userNumber = prompt('Your number is bigger then the computer’s, guess again') 
            
        } else {
            userNumber = prompt('Your number is smaller then the computer’s, guess again')
        }
    
   }
   alert('out of chances')
}
}
