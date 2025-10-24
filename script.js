// Cart functionality using localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let products = [
//Electonics (16 products)
{id:1, name:"Smartphone", price:149000, image:"ea.jpeg"},
{id:2, name:"Laptop", price:29999, image:"eb.jpeg"},
{id:3, name:"Tablet", price:11999, image:"ec.jpeg"},
{id:4, name:"Smartwatch", price:2999, image:"ed.jpeg"},
{id:5, name:"Bluetooth Headphones", price:999, image:"ee.jpeg"},
{id:6, name:"Wireless Earbuds", price:799, image:"ef.jpeg"},
{id:7, name:"LG Smart TV", price:27899, image:"eg.jpeg"}, 
{id:8, name:"Gaming Console", price:67999, image:"eh.jpeg"},
{id:9, name:"Desktop", price:17899, image:"ei.jpeg"},
{id:10, name:"Wired Keyboard", price:1199, image:"ej.jpeg"},
{id:11, name:"Wired Mouse", price:459, image:"ek.jpeg"},
{id:12, name:"Gaming Keyboard", price:2999, image:"el.jpeg"},
{id:13, name:"VR Headset", price:11999, image:"em.jpeg"},
{id:14, name:"Wireless Mouse", price:799, image:"en.jpeg"},
{id:15, name:"Gaming Laptop", price:77999, image:"eo.jpeg"},
{id:16, name:"Macbook", price:49999, image:"ep.jpeg"}
];
function updateCartCount() {
    const cartCountElements = document.querySelectorAll('#cart-count');
    cartCountElements.forEach(element => {
        element.textContent = cart.length;
    });
}

function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`${name} added to cart!`);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    displayCart();
}

function displayCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalAmountElement = document.getElementById('total-amount');
    if (!cartItemsElement || !totalAmountElement) return;

    cartItemsElement.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <span>${item.name} (x${item.quantity}) - ${itemTotal.toFixed(2)} KSH</span>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsElement.appendChild(itemElement);
    });

    totalAmountElement.textContent = total.toFixed(2);
}

function displayCheckout() {
    const checkoutItemsElement = document.getElementById('checkout-items');
    const checkoutTotalElement = document.getElementById('checkout-total-amount');
    const amountInput = document.getElementById('amount');
    if (!checkoutItemsElement || !checkoutTotalElement || !amountInput) return;

    checkoutItemsElement.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        const itemElement = document.createElement('div');
        itemElement.className = 'checkout-item';
        itemElement.innerHTML = `
            <span>${item.name} (x${item.quantity}) - ${itemTotal.toFixed(2)} KSH</span>
        `;
        checkoutItemsElement.appendChild(itemElement);
    });

    checkoutTotalElement.textContent = total.toFixed(2);
    amountInput.value = total.toFixed(2);
}

function proceedToCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    if (localStorage.getItem('loggedIn') !== 'true') {
        alert('Please log in to proceed to checkout.');
        window.location.href = 'login.html';
        return;
    }
    window.location.href = 'checkout.html';
}

// Form handling
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();

    const registrationForm = document.getElementById('registration-form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(registrationForm);
            const username = formData.get('username');
            const email = formData.get('email');
            const password = formData.get('password');
            const confirmPassword = formData.get('confirm-password');

            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            // In a real app, this would send data to the server
            alert(`Registration successful for ${username}!`);
            window.location.href = 'login.html';
        });
    }

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(loginForm);
            const username = formData.get('username');
            const password = formData.get('password');

            // In a real app, this would authenticate with the server
            alert(`Login successful for ${username}!`);
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('username', username);
            window.location.href = 'index.html';
        });
    }

    const paymentForm = document.getElementById('payment-form');
    if (paymentForm) {
        paymentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            processPayment();
        });
    }
});

function processPayment() {
    const region = document.getElementById('region').value;
    const city = document.getElementById('city').value;
    const postalAddress = document.getElementById('postal-address').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const amount = document.getElementById('amount').value;

    if (!region || !city || !phoneNumber || !amount) {
        alert('Please fill in all required delivery and payment details.');
        return;
    }

    // In a real app, this would initiate M-Pesa payment and save delivery address
    alert(`Order placed! Delivery to ${region}, ${city}${postalAddress ? ', ' + postalAddress : ''}. M-Pesa payment initiated for ${amount} KSH to ${phoneNumber}. Please check your phone to complete the transaction.`);
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    window.location.href = 'index.html';
}

function logout() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('username');
    alert('Logged out successfully.');
    window.location.href = 'index.html';
}

    // Display cart or checkout if on respective pages
    if (document.getElementById('cart-items')) {
        displayCart();
    }
    if (document.getElementById('checkout-items')) {
        displayCheckout();
    }
