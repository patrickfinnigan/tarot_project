import React, {Component} from 'react';
import tarotDeck from "tarot-deck";



export class Tarot extends Component  {
    
    
    render () {
        const Submit = () => {
            // console.log( tarot.getByRank(0) );
            alert('You submitted the form!');
        }

        return (
            <div className="Tarot">
                <button className="button" onClick={Submit}>Click</button>
                <div className="output"></div>
            </div>
        );
    }
}

export default Tarot