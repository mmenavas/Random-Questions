import React, { Component } from 'react';

class InsertBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            category: ''
        };

        this.handleQuestionChange = this.handleQuestionChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleQuestionChange(e) {
        this.setState({
            question: e.target.value
        });
    }

    handleCategoryChange(e) {
        this.setState({
            category: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let question = this.state.question.trim();
        let category = this.state.category.trim();
        if (!question|| !category) {
            return;
        }

        //Here we do the final submit to the parent component
        this.props.onAddQuestionSubmit({question: question, category: category});

        this.setState({
            question: '',
            category: '',
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="New question"
                    name="question"
                    onChange={this.handleQuestionChange}
                    value={this.state.question ? this.state.question : ''}
                />
                <input
                    type="text"
                    placeholder="Category"
                    name="category"
                    onChange={this.handleCategoryChange}
                    value={this.state.category ? this.state.category : ''}
                />
                <input
                    type="submit"
                    value="Add Question"
                />
            </form>
        );
    }
}

export default InsertBar;
