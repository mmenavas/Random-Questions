import React, { Component } from 'react';
import QuestionRow from './QuestionRow';
import '../css/QuestionsTable.css';


class QuestionsTable extends Component {

    render() {
        var rows = [];
        this.props.questions.forEach((item) => {
            if (item.question.toUpperCase().indexOf(this.props.filterText.toUpperCase()) === -1 &&
                item.author.toUpperCase().indexOf(this.props.filterText.toUpperCase()) === -1 &&
                item.category.toUpperCase().indexOf(this.props.filterText.toUpperCase()) === -1
            ) {
                return;
            }
            rows.push(<QuestionRow key={item.key} question={item.question} author={item.author} email={item.email} category={item.category} votes={item.votes}/>);
        });
        
        return (
            <table className="Questions">
                <thead>
                <tr>
                    <th>Question</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Votes</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }

}

export default QuestionsTable;
