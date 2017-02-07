import React, { Component } from 'react';
import '../css/Question.css';

class Question extends Component {
    render() {
        return (
            <div className="Question">
                <p className="Question-content">
                    {this.props.content}
                </p>
                <p className="Question-category">
                    {this.props.category}
                </p>
                <p className="Question-votes">
                    {this.props.votes}
                </p>
            </div>
        );
    }
}

export default Question;
