# Online Shopping System

## Overview
This project is an online shopping system that allows users to register, add items to their shopping cart, and checkout using M-Pesa as a payment method. The system is designed to be attractive, user-friendly, and available for users to access online.

## Static Site

A static HTML/CSS/JavaScript version of the shopping system is available in the `public/` directory. This version includes:

- Home page with featured products
- User registration and login forms
- Shopping cart functionality (using localStorage)
- Checkout with M-Pesa payment simulation

### Running the Static Site

To run the static site locally:

1. Open `public/index.html` in your web browser.

### Hosting

The static site can be hosted on free platforms like:

- **GitHub Pages**: Push the `public/` folder to a GitHub repository and enable Pages in the repository settings.
- **Netlify**: Drag and drop the `public/` folder to Netlify's deploy interface.
- **Vercel**: Connect your repository and deploy the `public/` folder.

## Features
- User registration and login
- Shopping cart management (add, remove, view items)
- Checkout process with M-Pesa payment integration
- Responsive and attractive user interface

## Project Structure
```
online-shopping-system
├── src
│   ├── app.ts
│   ├── controllers
│   │   ├── authController.ts
│   │   ├── cartController.ts
│   │   └── checkoutController.ts
│   ├── routes
│   │   ├── authRoutes.ts
│   │   ├── cartRoutes.ts
│   │   └── checkoutRoutes.ts
│   ├── models
│   │   ├── user.ts
│   │   ├── item.ts
│   │   └── cart.ts
│   ├── views
│   │   ├── registrationForm.tsx
│   │   ├── shoppingCart.tsx
│   │   └── checkout.tsx
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd online-shopping-system
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the application:
   ```
   npm start
   ```

## Usage
- Navigate to the registration page to create a new account.
- Log in to your account to access the shopping cart.
- Add items to your cart and proceed to checkout.
- Choose M-Pesa as your payment method to complete your purchase.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.