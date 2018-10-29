import React from 'react';

const Players = ({ players, deletePlayer }) => { //functional components
    //console.log(this.props);

    const playersList = players.map(player => {
        return (player.age > 20) ? (
            <div className="player" key={player.id}>
                <div>Name: {player.name}</div>
                <div>Age:  {player.age}</div>
                <button onClick={() => { deletePlayer(player.id) }}>Delete Player</button>
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
