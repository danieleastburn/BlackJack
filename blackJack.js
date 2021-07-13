
const shuffleDeck = () => {
  
  
    let deck = ["ace_of_clubs.png", "2_of_clubs.png", "3_of_clubs.png", "4_of_clubs.png", "5_of_clubs.png", "6_of_clubs.png", "7_of_clubs.png", "8_of_clubs.png", "9_of_clubs.png", "10_of_clubs.png", "jack_of_clubs.png", "queen_of_clubs.png", "king_of_clubs.png", "ace_of_diamonds.png", "2_of_diamonds.png", "3_of_diamonds.png", "4_of_diamonds.png", "5_of_diamonds.png", "6_of_diamonds.png", "7_of_diamonds.png", "8_of_diamonds.png", "9_of_diamonds.png", "10_of_diamonds.png", "jack_of_diamonds.png", "queen_of_diamonds.png", "king_of_diamonds.png", "ace_of_spades.png", "2_of_spades.png", "3_of_spades.png", "4_of_spades.png", "5_of_spades.png", "6_of_spades.png", "7_of_spades.png", "8_of_spades.png", "9_of_spades.png", "10_of_spades.png", "jack_of_spades.png", "queen_of_spades.png", "king_of_spades.png", "ace_of_hearts.png", "2_of_hearts.png", "3_of_hearts.png", "4_of_hearts.png", "5_of_hearts.png", "6_of_hearts.png", "7_of_hearts.png", "8_of_hearts.png", "9_of_hearts.png", "10_of_hearts.png", "jack_of_hearts.png", "queen_of_hearts.png", "king_of_hearts.png"];
    
    let i = 0
    let j = 0
    let temp = null
    
    for (i = deck.length - 1; i > 0; i--){
      
      j = Math.floor(Math.random() * (i + 1))
      temp = deck[i]
      deck[i] = deck[j]
      deck[j] = temp
    }
    return(deck)
  }

const getCardValue = (card) =>{ 
  let temp = card.split("_");
  let value;
  if (temp[0] == "ace"){
    value = 11;
  }
  else if(temp[0] == "jack" || temp[0] == "queen" || temp[0] == "king"){
    value = 10;
  }
  else{
    value = parseInt(temp[0]);
  }

  return(value);
}

const reset = () =>{
  playerTotal = 0
  dealerTotal = 0
  playerHitTurn = 1
  playerBust = false
  playerStuck = false
  document.getElementById('btnHit').style.color = 'red';
  document.getElementById('btnStick').style.color = 'blue';
  


  playerCardDom1.src = 'cardIMGs/back.png'
  playerCardDom2.src = 'cardIMGs/back.png'
  playerCardDom3.src = 'cardIMGs/back.png'
  playerCardDom4.src = 'cardIMGs/back.png'
  playerCardDom5.src = 'cardIMGs/back.png'

  dealerCardDom1.src = 'cardIMGs/back.png'
  dealerCardDom2.src = 'cardIMGs/back.png'
  dealerCardDom3.src = 'cardIMGs/back.png'
  dealerCardDom4.src = 'cardIMGs/back.png'
  dealerCardDom5.src = 'cardIMGs/back.png'


}

var gameDeck
var playerTotal
var dealerTotal
var draw
var playerHitTurn = 1
var playerBust = false
var dealerBust = false

const playerCardDom1 = document.querySelector('.playerCard1');
const playerCardDom2 = document.querySelector('.playerCard2');
const playerCardDom3 = document.querySelector('.playerCard3');
const playerCardDom4 = document.querySelector('.playerCard4');
const playerCardDom5 = document.querySelector('.playerCard5');

const dealerCardDom1 = document.querySelector('.dealerCard1');
const dealerCardDom2 = document.querySelector('.dealerCard2');
const dealerCardDom3 = document.querySelector('.dealerCard3');
const dealerCardDom4 = document.querySelector('.dealerCard4');
const dealerCardDom5 = document.querySelector('.dealerCard5');

document.querySelector('#btnStart').addEventListener('click', function(){
  
  reset();
  gameDeck = shuffleDeck();
  
  
  draw = gameDeck[0];
  playerCardDom1.src ='cardIMGs/' + draw;
  playerTotal = getCardValue(draw)
  gameDeck.shift();

  draw = gameDeck[0];
  dealerCardDom1.src ='cardIMGs/' + draw;
  dealerTotal = getCardValue(draw);
  gameDeck.shift();

  draw = gameDeck[0];
  playerCardDom2.src ='cardIMGs/' + draw;
  playerTotal += getCardValue(draw)
  document.querySelector('#playerTotal').textContent = "Total: " + playerTotal;
  gameDeck.shift();

  draw = gameDeck[0];
  dealerCardDom2.src ='cardIMGs/' + draw;
  dealerTotal += getCardValue(draw)
  document.querySelector('#dealerTotal').textContent = "Total: " + dealerTotal;
  gameDeck.shift();


    
})

document.querySelector('#btnHit').addEventListener('click', function(){
  if (playerBust == false && playerStuck == false){
    if(playerHitTurn == 1){

      draw = gameDeck[0];
      playerCardDom3.src ='cardIMGs/' + draw;
      playerTotal += getCardValue(draw)
      document.querySelector('#playerTotal').textContent = "Total: " + playerTotal;
      gameDeck.shift();
      playerHitTurn++

      if (playerTotal > 21){
        playerBust = true;
        document.querySelector('#playerTotal').textContent = "BUST";
        document.querySelector('#dealerTotal').textContent = "WINNER";
        document.getElementById('btnHit').style.color = 'grey';
        document.getElementById('btnStick').style.color = 'grey';
      }
  }
    else if(playerHitTurn == 2){
    
      draw = gameDeck[0];
      playerCardDom4.src ='cardIMGs/' + draw;
      playerTotal += getCardValue(draw)
      document.querySelector('#playerTotal').textContent = "Total: " + playerTotal;
      gameDeck.shift();
      playerHitTurn++

      if (playerTotal > 21){
        playerBust = true;
        document.querySelector('#playerTotal').textContent = "BUST";
        document.querySelector('#dealerTotal').textContent = "WINNER";
        document.getElementById('btnHit').style.color = 'grey';
        document.getElementById('btnStick').style.color = 'grey'; 
      }

  }

    else if(playerHitTurn == 3){
    
      draw = gameDeck[0];
      playerCardDom5.src ='cardIMGs/' + draw;
      playerTotal += getCardValue(draw)
      document.querySelector('#playerTotal').textContent = "Total: " + playerTotal;
      gameDeck.shift();
      playerHitTurn++

      if (playerTotal > 21){
        playerBust = true;
        document.querySelector('#playerTotal').textContent = "BUST";
        document.querySelector('#dealerTotal').textContent = "WINNER";
        document.getElementById('btnHit').style.color = 'grey';
        document.getElementById('btnStick').style.color = 'grey';
      }
   }
  }
  
  
})

document.querySelector('#btnStick').addEventListener('click', function(){
  if(playerBust == false && playerStuck == false){
    document.getElementById('btnHit').style.color = 'grey';
    document.getElementById('btnStick').style.color = 'grey';
    playerStuck = true;


    if(dealerTotal > 21){
      dealerBust = true;
      document.querySelector('#dealerTotal').textContent = "BUST";
      document.querySelector('#playerTotal').textContent = "WINNER";
    }
    else if(dealerTotal > 17 && dealerTotal <= 21){
      if(playerTotal > dealerTotal){
        document.querySelector('#dealerTotal').textContent = "LOSER";
        document.querySelector('#playerTotal').textContent = "WINNER";
      }
      else if(dealerTotal == playerTotal){
        document.querySelector('#dealerTotal').textContent = "DRAW";
        document.querySelector('#playerTotal').textContent = "DRAW";

      }
      
      else{
        document.querySelector('#dealerTotal').textContent = "WINNER";
        document.querySelector('#playerTotal').textContent = "LOSER";
      }
    }
    else{
      
      draw = gameDeck[0];
      dealerCardDom3.src ='cardIMGs/' + draw;
      dealerTotal += getCardValue(draw)
      document.querySelector('#dealerTotal').textContent = "Total: " + dealerTotal;
      gameDeck.shift();

      if(dealerTotal > 21){
        dealerBust = true;
        document.querySelector('#dealerTotal').textContent = "BUST";
        document.querySelector('#playerTotal').textContent = "WINNER";
      }
      else if(dealerTotal > 17 && dealerTotal <= 21){
        if(playerTotal > dealerTotal){
          document.querySelector('#dealerTotal').textContent = "LOSER";
          document.querySelector('#playerTotal').textContent = "WINNER";
        }
        else if(dealerTotal == playerTotal){
          document.querySelector('#dealerTotal').textContent = "DRAW";
          document.querySelector('#playerTotal').textContent = "DRAW";
  
        }
        else{
          document.querySelector('#dealerTotal').textContent = "WINNER";
          document.querySelector('#playerTotal').textContent = "LOSER";
        }
      }
      else{
        draw = gameDeck[0];
        dealerCardDom4.src ='cardIMGs/' + draw;
        dealerTotal += getCardValue(draw)
        document.querySelector('#dealerTotal').textContent = "Total: " + dealerTotal;
        gameDeck.shift();

        if(dealerTotal > 21){
          dealerBust = true;
          document.querySelector('#dealerTotal').textContent = "BUST";
          document.querySelector('#playerTotal').textContent = "WINNER";
        }
        else if(dealerTotal > 17 && dealerTotal <= 21){
          if(playerTotal > dealerTotal){
            document.querySelector('#dealerTotal').textContent = "LOSER";
            document.querySelector('#playerTotal').textContent = "WINNER";
          }
          else if(dealerTotal == playerTotal){
            document.querySelector('#dealerTotal').textContent = "DRAW";
            document.querySelector('#playerTotal').textContent = "DRAW";
    
          }
          else{
            draw = gameDeck[0];
            dealerCardDom5.src ='cardIMGs/' + draw;
            dealerTotal += getCardValue(draw)
            document.querySelector('#dealerTotal').textContent = "Total: " + dealerTotal;
            gameDeck.shift();

            if(dealerTotal > 21){
              dealerBust = true;
              document.querySelector('#dealerTotal').textContent = "BUST";
              document.querySelector('#playerTotal').textContent = "WINNER";
            }
            else if(dealerTotal > 17 && dealerTotal <= 21){
              if(playerTotal > dealerTotal){
                document.querySelector('#dealerTotal').textContent = "LOSER";
                document.querySelector('#playerTotal').textContent = "WINNER";
              }
              else if(dealerTotal == playerTotal){
                document.querySelector('#dealerTotal').textContent = "DRAW";
                document.querySelector('#playerTotal').textContent = "DRAW";
        
              }
              else{
                document.querySelector('#dealerTotal').textContent = "WINNER";
                document.querySelector('#playerTotal').textContent = "LOSER";

              }
            }
          }
        }

      }

    }
      
   

  }
})

