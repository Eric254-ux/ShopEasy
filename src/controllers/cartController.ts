class CartController {
    constructor() {
        this.cart = [];
    }

    addItemToCart(item) {
        this.cart.push(item);
        return this.cart;
    }

    removeItemFromCart(itemId) {
        this.cart = this.cart.filter(item => item.id !== itemId);
        return this.cart;
    }

    viewCart() {
        return this.cart;
    }
}

export default CartController;