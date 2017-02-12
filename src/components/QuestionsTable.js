import React, { Component } from 'react';
import QuestionRow from './QuestionRow';
import '../css/QuestionsTable.css';


class QuestionsTable extends Component {
    constructor(props) {
        super(props);
        this.handleOnVote = this.handleOnVote.bind(this);
    }
    handleOnVote(index, votes) {
        this.props.onVote(index, votes);
    }
    render() {
        let rows = [];
        let index = 0;

        this.props.questions.forEach((item) => {
            if (item.question.toUpperCase().indexOf(this.props.filterText.toUpperCase()) === -1 &&
                item.author.toUpperCase().indexOf(this.props.filterText.toUpperCase()) === -1 &&
                item.category.toUpperCase().indexOf(this.props.filterText.toUpperCase()) === -1
            ) {
                return;
            }
            rows.push(
                <QuestionRow
                    key={item.key}
                    index={index}
                    question={item.question}
                    author={item.author}
                    email={item.email}
                    category={item.category}
                    votes={item.votes}
                    userVotes={item.userVotes}
                    userEmail={this.props.email}
                    onVote={this.handleOnVote}
                />
            );
            index++;
        });
        
        return (
            <table className="Questions">
                <thead>
                <tr>
                    <th className="Question-Header">Question</th>
                    <th className="Author-Header">Author</th>
                    <th className="Category-Header">Category</th>
                    <th className="Votes-Header">Votes</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }

}

export default QuestionsTable;
