// Importing module

// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing module');
// console.log(shippingCost);

// import all the exports of a module at the same time.
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 2);
// console.log(ShoppingCart.totalPrice);

// In practice, we usually never mix Named and Default Exports in the same module.
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('applies', 4);

//imports are not copies of the export.
console.log(cart);

console.log('Start fetching');
//before top-level await
// async function x() {}

//////////////////////////////
// Top-level await for modules
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('something');

// real world example
const getlastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return {
    title: data.at(-1).title,
    text: data.at(-1).body,
  };
};

//an async function, which this function here clearly is, will always return a promise. It will not return the actual data itself, because by the time we are running this line of code here, the data has not yet arrived. So we still have that pending promise.

const lastPost = getlastPost();
console.log(lastPost);

//use then method in regular promise to access the resolved value. Not very clean
// lastPost.then(last => console.log(last));

//using top-level await to access resolved value
const lastPost2 = await getlastPost();
console.log(lastPost2);
