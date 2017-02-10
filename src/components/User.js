import React, { Component } from 'react';
import InsertBar from './InsertBar';
import '../css/User.css';

class User extends Component {
    constructor(props) {
        super(props);
        this.handleSignOut = this.handleSignOut.bind(this);
        this.handleAddQuestionSubmit = this.handleAddQuestionSubmit.bind(this);
    }

    handleSignOut() {
        // Pass event to parent component
        this.props.onSignOut();
    }

    handleAddQuestionSubmit(values) {
        this.props.onAddQuestionSubmit(values);
    }

    render() {
        if (!this.props.email) {
            return (
                <div className="Anonymous-User">
                    <div className="left">
                        <h3 className="User--Log-In-Headline">You too can contribute!</h3>
                        <p className="User--Log-In-Text">Sign in to add more questions.</p>
                    </div>
                    <div className="right">
                        <div id="firebaseui-auth-container"></div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="User">
                    <div className="User--Info">
                        <div className="left">
                            <p>You are logged in as <strong title={this.props.email}>{this.props.author}</strong></p>
                        </div>
                        <div className="right">
                            <button className="User--Sign-Out" onClick={this.handleSignOut}>Sign out</button>
                        </div>
                    </div>
                    <InsertBar
                        onAddQuestionSubmit={this.handleAddQuestionSubmit}
                    />
                </div>
            );
        }
    }
}

export default User;
