import {useState} from "react";
import { Statistics } from "components/Statistics/Statistics";
import { FeedbackButton } from "./FeedbackButton";

export function Feedback() {

    const [good, setGood ] = useState(0);
    const [ neutral, setNeutral ] = useState(0);
    const [ bad, setBad ] = useState(0);

    const total = 0 + good + neutral + bad;

    const pesent = good / total * 100;

    return( <div>

                <h1>Please leave feedback</h1>

                <FeedbackButton
                    good={()=>setGood(good + 1)}
                    neutral={()=>setNeutral(neutral + 1)}
                    bad={()=>setBad(bad + 1 )}
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
            </div>)
};