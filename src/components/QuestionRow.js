import React, { Component } from 'react';
import Plus1 from './Plus1';
import '../css/QuestionRow.css';

class QuestionRow extends Component {
    constructor(props) {
        super(props);
        this.handleOnVote = this.handleOnVote.bind(this);
    }
    handleOnVote(votes) {
        this.props.onVote(this.props.index, votes);
    }
    render() {
        let voteSize = "Unpopular-Question";
        if (this.props.votes > 16) {
            voteSize = "Very-Popular-Question";
        }
        else if (this.props.votes > 8) {
            voteSize = "Popular-Question";
        }
        else if (this.props.votes > 0) {
            voteSize = "Okay-Question";
        }
        return (
            <tr>
                <td>{this.props.question}</td>
                <td><strong title={this.props.email}>{this.props.author}</strong></td>
                <td>{this.props.category}</td>
                <td className="Votes-Cell">
                    <span className={"Vote-Value " + voteSize}>{this.props.votes}</span>
                    <Plus1 userEmail={this.props.userEmail} userVotes={this.props.userVotes} onVote={this.handleOnVote} />
                </td>
            </tr>
        );
    }
}

export default QuestionRow;
