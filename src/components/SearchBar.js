import React, { Component } from 'react';
import '../css/SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.props.onUserInput(
            this.filterTextInput.value
        );
    }

    render() {
        return (
            <form className="Search">
                <input
                    className="Search--Box"
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    ref={(input) => this.filterTextInput = input}
                    onChange={this.handleChange}
                />
            </form>
        );
    }
}

export default SearchBar;
