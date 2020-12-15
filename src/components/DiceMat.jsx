import React from 'react';
import RollButton from './RollButton';
import ReactDice from 'react-dice-complete';
import 'react-dice-complete/dist/react-dice-complete.css'

class DiceMat extends React.Component {
  constructor(){
    super();

    this.rollAll = this.rollAll.bind(this);
    this.rollDoneCallback = this.rollDoneCallback.bind(this);
  }

  rollAll() {
    this.reactDice.rollAll()
  }

  rollDoneCallback(num) {
    console.log(`You rolled a ${num}`)

  }
  render() {

    return (
      <div>
        <ReactDice
          numDice={6}
          rollDone={this.rollDoneCallback}
          ref={dice=> this.reactDice = dice}
          outline={true}
          rollTime={.5}
          disableIndividual={true}
          faceColor={"#ffffff"}
          dotColor={"black"}
          defaultRoll={false}
        />
        <RollButton rollAll={this.rollAll}/>
      </div>
    );
  }
}

export default DiceMat;