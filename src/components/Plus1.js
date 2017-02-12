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
            let options = [];
            console.log(this.props.userVotes);
            for (let i = 1; i <= 3; i++) {
                if (i == this.props.userVotes) {
                    options.push(
                        <button key={i} className="Plus1-Widget--plus-1 selected">+{this.props.userVotes}</button>
                    );
                }
                else {
                    options.push(
                        <button onClick={this.handleClick.bind(null, i)} key={i} className="Plus1-Widget--plus-1">+{i}</button>
                    );
                }
            }

            return (
                <div className="Plus1-Widget">
                    {options}
                </div>
            );
        }
    }
}

export default Plus1;
