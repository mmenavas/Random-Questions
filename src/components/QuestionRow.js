import React, { Component } from 'react';
import '../css/QuestionRow.css';

class QuestionRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.question}</td>
                <td>{this.props.author}</td>
                <td>{this.props.category}</td>
                <td>{this.props.votes}</td>
            </tr>
        );
    }
}

export default QuestionRow;
