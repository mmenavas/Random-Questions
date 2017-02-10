import React, { Component } from 'react';
import '../css/Plus1.css';

class Plus1 extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(votes) {
        this.props.onVote(votes);
    }
    render() {
        if (!this.props.userEmail) {
            return (<span></span>);
        }
        else {
            return (
                <div className="Plus1-Widget">
                    <button onClick={this.handleClick.bind(null, 1)} className="Plus1-Widget--plus-1">+1</button>
                    <button onClick={this.handleClick.bind(null, 2)} className="Plus1-Widget--plus-2">+2</button>
                    <button onClick={this.handleClick.bind(null, 3)} className="Plus1-Widget--plus-3">+3</button>
                </div>
            );
        }
    }
}

export default Plus1;
