import React from "react";

export const ProductDetails = props =>{
    return (
        <div class="box">
            <h2>{props.title}</h2>
            <p>$ {props.price}</p>
            <p>
                {props.description}<br />
                By {props.seller.full_name}
            </p>
            <small>
                {props.created_at.toLocaleString()}
            </small>
        </div>
    );
};