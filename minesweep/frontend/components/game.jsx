
import React from "react";
import * as Minesweeper from '../../minesweeper';
import Board from "./board";

class Game extends React.Component {
    constructor(){
        super()
        let numBombs = Math.ceil(Math.random() * 10)

        this.state = {
            board: new Minesweeper.Board(10, numBombs)
        }

        this.updateGame = this.updateGame.bind(this);
    }

    updateGame(tile, flagged) {
        if(flagged){
            tile.toggleFlag();
        } else {
            tile.explore();
        }

        this.setState({ board: this.state.board })
    }

    render() {
        return (
            <div className='game'>
                <Board updateGame={this.updateGame} board={this.state.board}/>
            </div>
        )
    }
}

export default Game;