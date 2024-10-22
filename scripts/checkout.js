import {renderOrderSummary} from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummerty.js';
import { renderCheckoutHeader } from './checkout/checkHeader.js';
import  "../data/cart-oop.js";

renderCheckoutHeader();
renderOrderSummary();
renderPaymentSummary();