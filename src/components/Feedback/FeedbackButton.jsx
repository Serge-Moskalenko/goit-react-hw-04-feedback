import React from "react";

export const FeedbackButton = ({ good, neutral, bad }) => (
    <div>
        <button onClick={good}>Good</button>
        <button onClick={neutral} >Neutral</button>
        <button onClick={bad} >Bad</button>
    </div> 
);