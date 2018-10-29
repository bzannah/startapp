import React from 'react';

const Players = ({ players }) => { //functional components
    //console.log(this.props);

    const playersList = players.map(player => {
        return (player.age > 20) ? (
            <div className="player" key={player.id}>
                <div>Name: {player.name}</div>
                <div>Age:  {player.age}</div>
                <br />
            </div>
        ) : null;
    });

    return (
        <div className="player-list">
            {playersList}
        </div>
    );
}

export default Players;
