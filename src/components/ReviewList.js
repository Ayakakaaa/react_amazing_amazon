import React from 'react';
import {ReviewDetails} from './ReviewDetails';

export const ReviewList = props => {
    return (
        <ul>
            {props.reviews.map(review =>(
                <ReviewDetails
                    key = {review.id}
                    // body = {review.body}
                    // rating = {"✯".repeat(review.rating)}
                    // author = {review.author}
                    // created_at = {new Date()}
                    {...review}
                    onDeleteClick={props.onReviewDeleteClick}
                />
            ))}
        </ul>
    );
};