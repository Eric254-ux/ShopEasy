import { Router } from 'express';
import CartController from '../controllers/cartController';

const router = Router();
const cartController = new CartController();

export default function setCartRoutes(app: Router) {
    app.post('/cart/add', cartController.addItemToCart);
    app.delete('/cart/remove/:itemId', cartController.removeItemFromCart);
    app.get('/cart', cartController.viewCart);
}