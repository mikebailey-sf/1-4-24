import React, { Component } from 'react';

class ScoreTable extends Component {

  render() {
    let playerRows = [];
    for (let i=0; i<this.props.players; i++){
      playerRows[i] = i+1;
    }
    let playerRowDisplay = playerRows.map(function(row){
      return <tr key={row}><td>{row}</td><td></td><td></td></tr>;
    });
    return (
      <div>
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Dice</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {playerRowDisplay}
        </tbody>
      </table>      
  </div>
    );
  }
}

export default ScoreTable;