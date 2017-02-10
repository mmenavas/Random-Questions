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
        return (
            <tr>
                <td>{this.props.question}</td>
                <td><strong title={this.props.email}>{this.props.author}</strong></td>
                <td>{this.props.category}</td>
                <td className="votes-cell">{this.props.votes}  <Plus1 userEmail={this.props.userEmail} onVote={this.handleOnVote} /></td>
            </tr>
        );
    }
}

export default QuestionRow;
