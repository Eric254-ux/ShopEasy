import { Router } from 'express';
import { CheckoutController } from '../controllers/checkoutController';

const router = Router();
const checkoutController = new CheckoutController();

export function setCheckoutRoutes(app: Router) {
    app.post('/checkout', checkoutController.initiateCheckout);
    app.post('/checkout/payment', checkoutController.processPayment);
}