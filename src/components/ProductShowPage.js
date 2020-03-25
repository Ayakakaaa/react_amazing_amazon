import React, { Component } from 'react';
import "./css/ProductShowPage.css";
import {ProductDetails} from './ProductDetails';
import {ReviewList} from './ReviewList';
import { Product } from "../api/product";
import { Spinner } from "./Spinner";

class ProductShowPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            product: null,
            isLoading: true
        };
    };

    deleteProduct() {
        this.setState({
            product: null
        })
      }

    deleteReview(id) {
        this.setState({
          product: {
            ...this.state.product,
            reviews: this.state.product.reviews.filter(r => r.id !== id)
          }
        })
      }

      componentDidMount(){
        Product.one(this.props.match.params.id).then(product => {
          this.setState({ product, isLoading: false });
        });
      }

    render(){
      if (this.state.isLoading) {
        return <Spinner message="Product doesn't exist" />;
      }
        return (
            <div class = "Page">
            <ProductDetails
                // title = "You can learn how to programming only one day"
                // description = "after reading this book, you will be able to write any programming your self to make an app a day."
                // price = {1000}
                // seller = {{full_name: "Amazing Programmer"}}
                // created_at = {new Date()}
                {...this.state.product}
            />
            <ReviewList 
            reviews = {this.state.product.reviews}
            onReviewDeleteClick={id => this.deleteReview(id)}
             />
            </div>
        );
    }
};

export default ProductShowPage;