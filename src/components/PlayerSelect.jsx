import React from 'react';

const PlayerSelect = (props) => {
  return (
    <div>
      <button className="selectPlayers" onClick={props.selectPlayer}>2</button>
      <button className="selectPlayers" onClick={props.selectPlayer}>3</button>
      <button className="selectPlayers" onClick={props.selectPlayer}>4</button>
      <button className="selectPlayers" onClick={props.selectPlayer}>5</button>
    </div>
  );
};

export default PlayerSelect;