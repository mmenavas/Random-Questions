import React, { Component } from 'react';
import '../css/QuestionRow.css';

class QuestionRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.question}</td>
                <td><strong title={this.props.email}>{this.props.author}</strong></td>
                <td>{this.props.category}</td>
                <td>{this.props.votes}</td>
            </tr>
        );
    }
}

export default QuestionRow;
