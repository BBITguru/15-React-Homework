// GameContainer Component

import React, {Component} from 'react';
import Cards from '../Cards';
import './GameContainer.css';

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { score: 0, gamestatus: "Click on a card to earn points, but don't click on any more than once!", clickedCards: [], cards: ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg", "images/image5.jpg", "images/image6.jpg", "images/image7.jpg", "images/image8.jpg", "images/image9.jpg", "images/image10.jpg", "images/image11.jpg", "images/image12.jpg"] };
    this.gameover = false;
  }

// Shuffle Cards
shuffleCards = cardArray => {
  let currentIndex = cardArray.length, temporaryVal, randomIndex;

  // While elements remain to shuffle
  while (0 !== currentIndex) {

    // Pick remaining card
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // swap it with current card
    temporaryVal = cardArray[currentIndex];
    cardArray[currentIndex] = cardArray[randomIndex];
    cardArray[randomIndex] = temporaryVal;
  }

  return cardArray;
}

// METHOD to handle CardClicks
cardClickHandler(img){
  this.setState({
    gamestatus: 
      "Click on a card to earn points, but don't click on any more than once!"
  });

  // if first click, set score to 1
  if(this.state.clickedCards.length===0) {
    let clickedCards =[];
    clickedCards.push(img);
    let cards = this.state.cards;
    cards = this.shuffleCards(cards);
    this.setState({score:1, clickedCards: clickedCards, cards: cards});
  }

  // if this is not the first click, then check to see if card has already been clicked
  else{
    for (let i=0;i<this.state.clickedCards.length; i++){
      if (img === this.state.clickedCards[i]) {
        this.setState({
          score: 0,
          gamestatus:"GAME OVER! YOU LOSE!",
          clickedCards: [],
        } , ()=>this.gameover=false);
        this.gameover=true;
        break;
      }
    }
    
    // if gameover is NOTtrue keep shuffling cards and let user select
    if(!this.gameover) {
      let clickedCards = this.state.clickedCards;
      let cards = this.state.cards;
      clickedCards.push(img);
      cards = this.shuffleCards(cards);

      // check to see if user won the game
      if (this.state.score===11) {
        this.setState({
          score: 0,
          clickedCards: [],
          gamestatus:
          "<div>You win! <src='../../../public/images/jorb.gif' </div>",
        });
      }
      // if user did not win, then increase the score
      else {
        this.setState({
          score: this.state.score + 1,
          clickedCards: clickedCards,
          cards: cards,
          gamestatus: "Good guess.  Keep Guessing!"
        });
      }
    }
  }
}

  render () {
    return (
      <div className='gamecontainer'>
        <h4 className ='status'>{this.state.gamestatus}</h4>
        <h4 className='score'>SCORE : {this.state.score}</h4>
        <br/>
        <div className='gamegrid'>
          {
            this.state.cards.map( img => {
              return (<div key={img}>
              <Cards imgsrc={img} onClick={()=>this.cardClickHandler(img)} />
              </div>);
            })
          }
        </div>
      </div>
    );
  }
}

export default GameContainer;



