import React from 'react';
import DiceMat from './components/DiceMat';
import PlayerSelect from './components/PlayerSelect';
import ScoreTable from './components/ScoreTable';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = this.getInitialState();
    this.selectPlayer = this.selectPlayer.bind(this);
    //Initializatin goes here
  }

  getInitialState(){
    return {
      players: 0
    };
  }

  selectPlayer(e){
    this.setState({
      players: e.target.value
    });

  }

  render(){
    return (
      <div className="App">
        <header className='App-header-footer'>1 - 4 - 24</header>
        {this.state.players ?   
          <DiceMat key='3'></DiceMat>
          :
          <PlayerSelect key='2' selectPlayer={this.selectPlayer}></PlayerSelect>
        }
        <ScoreTable key='1' test="test" players={this.state.players}></ScoreTable>
      </div>
    );
  }
}

export default App;
