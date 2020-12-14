import React from 'react';

const PlayerSelect = (props) => {
  return (
    <div>
      <button className="selectPlayers" value="2" onClick={props.selectPlayer}>2</button>
      <button className="selectPlayers" value="3" onClick={props.selectPlayer}>3</button>
      <button className="selectPlayers" value="4" onClick={props.selectPlayer}>4</button>
      <button className="selectPlayers" value="5" onClick={props.selectPlayer}>5</button>
    </div>
  );
};

export default PlayerSelect;