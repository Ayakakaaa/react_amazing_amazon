import React from 'react';

export const ReviewDetails = props => {
    return (
        <div class= "boxR">
            <p>{props.body}&nbsp;&nbsp;{"✯".repeat(props.rating)}</p>
            <small>By {props.author.full_name}</small>&nbsp;&nbsp;&nbsp;&nbsp;
            <button 
            className="ui mini red button"
            onClick={()=> props.onDeleteClick(props.id)}>Delete</button>
        </div>
    );
};