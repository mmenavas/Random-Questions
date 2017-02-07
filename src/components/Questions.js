import React, { Component } from 'react';
import Question from './Question';
import '../css/Questions.css';

class Questions extends Component {
    render() {
        return (
            <ul className="Questions">
                {this.props.questions.map(function(item) {
                    return <Question content={item.question} category={item.category} votes={item.votes} />
                })}
            </ul>
        );
    }
}

export default Questions;
