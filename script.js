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
