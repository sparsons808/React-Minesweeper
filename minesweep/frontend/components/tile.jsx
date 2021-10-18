import React from "react";

class Tile extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)

    }

    handleClick(event) {
        if(event.target.classList.contains('bombed')) {
            event.target.classList = "tile red"
        }

        if(event.altKey) {
            this.props.updateGame(this.props.tile, true)
        } else {
            this.props.updateGame(this.props.tile, false)
        }
    }

    render() {

        let text = "";
        let classes = "tile";

        if (this.props.tile.bombed) {
            text = <span id="bombed">&#128163;</span>
            classes += " bombed"
        } else if (this.props.tile.explored) {
            let numBombs = this.props.tile.adjacentBombCount();
            text = <span>{numBombs}</span>
            classes += " revealed";
        } else if (this.props.tile.flagged){
            text = <span>&#128681;</span>
        }

        return(
            <div className={classes} onClick={this.handleClick}>
                {text}
            </div>
        )
    }
}

export default Tile;