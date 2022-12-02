import React, { Component } from "react";
import { Statistics } from "components/Statistics/Statistics";
import { FeedbackButton } from "./FeedbackButton";

export class Feedback extends Component {
    
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };
    
    onClickGood = () => {this.setState(e => ({good: e.good + 1}))}

    onClickNeutral = () => {this.setState(e => ({neutral: e.neutral + 1}))};

    onClickBad = () => { this.setState(e => ({ bad: e.bad + 1 })) };
    

    render() {

        const { good, neutral, bad } = this.state
        
        const total = 0 + good + neutral + bad;

        const pesent=good/total*100

        return (
            <div>

                <h1>Please leave feedback</h1>

                <FeedbackButton
                    good={this.onClickGood}
                    neutral={this.onClickNeutral}
                    bad={this.onClickBad}
                />

                <h2>Statistics</h2>
                
                {total ? 
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={total}
                    positivePercentage={good && pesent.toFixed()} />
                :'Not feedback given'}
            </div>
        )
    }
};