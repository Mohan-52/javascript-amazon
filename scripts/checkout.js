import {renderOrderSummary} from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummerty.js';
import { renderCheckoutHeader } from './checkout/checkHeader.js';
import { loadProducts } from '../data/products.js';

import { loadCart } from '../data/cart.js';
//import  '../data/backend-practice.js';
// import  "../data/cart-class.js";



Promise.all([
  new Promise((resolve)=>{
    loadProducts(()=>{
      resolve();
  });
  }),
  new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });

  })
]).then(()=>{
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();

});




/* new Promise((resolve)=>{
  loadProducts(()=>{
    resolve();
  });

 }).then(()=>{
  return new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });

  });

}).then(()=>{
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});

 */


/* loadProducts(()=>{
  loadCart(()=>{
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
  
  });
 
});  */

