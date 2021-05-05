/*console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secertNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener
('click', function(){
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess);

    // When there is no input
    if(!guess){
        displayMessage('No Number!');
    } else if (guess === secertNumber) { // When player wins
        displayMessage('Correct Number!');

        document.querySelector('.number').textContent = secertNumber;
        
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    } else if (guess !== secertNumber) { 
        if (score > 1) {
            displayMessage(guess > secertNumber ? 'Too High' : 'Too Low')
            score--;
            document.querySelector('.score').textContent = score; 
        } else {
            displayMessage('You lost the game!');
            document.querySelector('.score').textContent = 0; 
        }
    }
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    document.querySelector('.score').textContent = score;
    secertNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    displayMessage('Start guessing...')
    
    document.querySelector('body').style.backgroundColor = '#222';
    
    document.querySelector('.number').style.width = '15rem';
})