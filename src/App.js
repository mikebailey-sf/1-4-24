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
        <PlayerSelect selectPlayer={this.selectPlayer}></PlayerSelect>
        <DiceMat></DiceMat>
        <ScoreTable></ScoreTable>
      </div>
    );
  }
}

export default App;
