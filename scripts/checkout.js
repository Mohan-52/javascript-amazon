import {renderOrderSummary} from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummerty.js';
import { renderCheckoutHeader } from './checkout/checkHeader.js';
import  '../data/backend-practice.js';
// import  "../data/cart-class.js";

renderCheckoutHeader();
renderOrderSummary();
renderPaymentSummary();