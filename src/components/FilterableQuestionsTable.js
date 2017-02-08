import React, { Component } from 'react';
import SearchBar from './SearchBar';
import QuestionsTable from './QuestionsTable';
import * as firebase from 'firebase';

class FilterableQuestionsTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            questions: [],
            filterText: ''
        };

        this.handleUserInput = this.handleUserInput.bind(this);
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
                    questions.push({
                        key: key,
                        question: childData['Question'],
                        author: childData['Author'],
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

    handleUserInput(filterText) {
        this.setState({
            filterText: filterText,
        });
    }

    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    onUserInput={this.handleUserInput}
                />
                <QuestionsTable
                    questions={this.state.questions}
                    filterText={this.state.filterText}
                />
            </div>
        );
    }

}

export default FilterableQuestionsTable;
