import { baseUrl } from "../config";

export const Product = {
  // Fetch all products from server
  all() {
    return fetch(`${baseUrl}/products`, {
      credentials: "include"
    }).then(res => res.json());
  },
  // Fetch a single quesion
  one(id) {
    return fetch(`${baseUrl}/products/${id}`, {
      credentials: "include"
    }).then(res => res.json());
  },
  // Create a product
  create(params) {
    // params is an object that reperesents a product
    // {body: 'qBody', title: 'qTitle' }
    return fetch(`${baseUrl}/products`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  },
  // Edit a product
  update(id, params) {
    return fetch(`${baseUrl}/products/${id}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  },
  // Delete a product
  destroy(id) {
    return fetch(`${baseUrl}/products/${id}`, {
      credentials: "include",
      method: "DELETE"
    }).then(res => res.json());
  }
};
