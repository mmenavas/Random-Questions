import React, { Component } from 'react';
import Question from './Question';
import * as firebase from 'firebase';
import '../css/Questions.css';


class Questions extends Component {

    constructor(props) {
        super(props);
        this.state = {questions: []};

    }

    componentDidMount() {
         // Initialize Firebase
        const config = {
            apiKey: "AIzaSyC8gRjneI90v_IqgHFqd8WH0280mVGBf7k",
            authDomain: "random-questions.firebaseapp.com",
            databaseURL: "https://random-questions.firebaseio.com",
            storageBucket: "random-questions.appspot.com",
        };
        const fb = firebase
            .initializeApp(config)
            .database()
            .ref();
        var query = fb.child('Questions').orderByKey();
        var _this = this;
        this.serverRequest =
            query.once("value").then(function(snapshot) {
                var questions = [];
                snapshot.forEach(function(childSnapshot) {
                    var key = childSnapshot.key;
                    var childData = childSnapshot.val();
                    console.log(key);
                    console.log(childData);
                    questions.push({
                        key: key,
                        question: childData['Question'],
                        category: childData['Category'],
                        votes:    childData['Votes']
                    });
                });
                _this.setState({questions: questions});
            });

    }

    componentWillUnmount() {
        this.serverRequest.abort();
    }
    render() {
        return (
            <ul className="Questions">
                {this.state.questions.map(function(item) {
                    return <li key={item.key}><Question question={item.question} category={item.category} votes={item.votes} /></li>
                })}
            </ul>
        );
    }

}

export default Questions;
