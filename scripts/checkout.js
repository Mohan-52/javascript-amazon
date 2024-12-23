import {renderOrderSummary} from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummerty.js';
import { renderCheckoutHeader } from './checkout/checkHeader.js';
import { loadProductsFetch } from '../data/products.js';

import { loadCart } from '../data/cart.js';
//import  '../data/backend-practice.js';
// import  "../data/cart-class.js";




async function loadPage(){
 

  try{

    await loadProductsFetch();

    await new Promise((resolve)=>{
      loadCart(()=>{
        resolve();
      });
    });


  } catch(error){

    console.log('Unexpected Eroor. Please try again latter.')

  }

 

  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();

  
 
}

loadPage();



/* Promise.all([
  loadProductsFetch(),
 
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
 */



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

