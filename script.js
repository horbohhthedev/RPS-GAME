    let score = JSON.parse(localStorage.getItem('score')) ||
         {
       wins: 0,
       losses: 0,
       ties: 0,
              }; 

              updateScoreElement();

 let computerMove = '';
      
       function playGame(playerMove) {
              let computerMove = pickComputerMove();

                     let result = '';
                 if (playerMove === 'Scissors'){
                     if (computerMove === 'rock'){
                     result = 'You lose';
                     } else if (computerMove === 'paper'){
                            result = 'You win'
                     } else if (computerMove === 'Scissors'){
                            result = 'Tie'
                     }

                 }   else if (playerMove === 'paper') {
                     if (computerMove === 'rock'){
                            result = 'You win';
                     } else if (computerMove === 'paper'){
                            result = 'Tie'
                     } else if (computerMove === 'Scissors'){
                            result = 'You lose'
                     }

                 }   else if (playerMove === 'rock'){
                                          
                     if (computerMove === 'rock'){
                            result = 'Tie';
                     } else if (computerMove === 'paper'){
                            result = 'You lose'
                     } else if (computerMove === 'Scissors'){
                            result = 'You win'
                     }
                 }

                 if (result === 'You win'){
                            score.wins += 1;
                 } else if(result === 'You lose'){
                            score.losses += 1;
                 } else if(result === 'Tie'){
                            score.ties += 1;
                 } 

                 localStorage.setItem('score', JSON.stringify(score));
                 updateScoreElement();

                 document.querySelector('.js-result').innerHTML = result;

                 document.querySelector('.js-moves').innerHTML = 
                 `You <img class="move-icon" src="images/${playerMove}-emoji.png"alt=${playerMove}>
              <img class="move-icon" src="images/${computerMove}-emoji.png"alt=${computerMove}>
              Computer`

                            }

       function updateScoreElement(){
              document.querySelector('.js-score').innerHTML = 
                 `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
       }

       function pickComputerMove(){
               let randomNumber = Math.random();
  

                     if(randomNumber >= 0 && randomNumber < 0.3){
                            computerMove ='rock';
                     } else if(randomNumber >= 0.3 && randomNumber < 0.6 ){
                            computerMove ='paper';
                     } else if(randomNumber >= 0.6 && randomNumber < 0.9){
                            computerMove ='Scissors';
                     }
                     
                     return computerMove;

              }
              

              console.log(randomNumber)