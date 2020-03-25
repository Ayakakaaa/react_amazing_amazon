import React, {Component}  from 'react';
import { Spinner } from "./Spinner";
import { Product } from "../api/product";
import { Link } from "react-router-dom";

export class ProductIndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      isLoading: true
    }
  }

  deleteProduct(id){
    this.setState((state,props) => {
      return {
        products: state.products.filter(p => p.id !== id)
      }
    })
  }

  componentDidMount() {
    Product.all().then(products => {
      this.setState({ products, isLoading: false });
    });
  }

  render(){
    if (this.state.isLoading) {
      return <Spinner message="Wait to load the list of products" />;
    }
    return (
      <main>
        <h2>Products</h2>
        <div>
          <ul class='container'>
              {this.state.products.map(product => (
              <li class="item">
                <Link to= {`/products/${product.id}`} className="ui link" href="">
                  {product.title}/${product.price}
                </Link> &nbsp;&nbsp;&nbsp;&nbsp;
                <button
                  className="ui mini inverted pink button" 
                  onClick={()=> this.deleteProduct(product.id)}>Delete
                </button>
              </li>
                ))}
          </ul>
        </div>
      </main>
    );
  } 
};