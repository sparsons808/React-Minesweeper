import React from "react"
import Tile from "./tile";

class Board extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const boardTiles = this.props.board.grid.map((row, idx1) => {
            return (
                <div className="row" key={idx1}>
                    {row.map((tile, idx2) => {
                        return (
                            // Tile is an instance of the class Tile (different from the react compoent)
                            <div key={idx2}>
                                <Tile tile={tile} updateGame={this.props.updateGame}/>
                            </div>
                        )
                    })}
                </div>
            )
        })
        return (
            <div>
                {boardTiles}
            </div>
        )
    }
}

export default Board;