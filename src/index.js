import React from 'react';
import ReactDOM from 'react-dom';
import Questions from './components/Questions';
import './css/index.css';

var questions = [
    {
        question:   "How are you?",
        category:   "Greetings",
        votes:      "21"
    },
    {
        question:   "What's up?",
        category:   "Greetings",
        votes:      "12"
    },
    {
        question:   "How is it going?",
        category:   "Greetings",
        votes:      "11"
    }
];

ReactDOM.render(
    <Questions questions={questions} />,
    document.getElementById('root')
);

