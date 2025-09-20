# Payment Integration Setup Guide

## Overview

This project includes integrated Stripe and PayPal payment processing for all service packages.

## Required Setup

### 1. Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Stripe Configuration
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
REACT_APP_STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here

# PayPal Configuration
REACT_APP_PAYPAL_CLIENT_ID=your_paypal_client_id_here
REACT_APP_PAYPAL_BUSINESS_EMAIL=your-paypal-business-email@example.com

# API Configuration
REACT_APP_API_URL=http://localhost:3001/api
```

### 2. Stripe Setup

1. Create a Stripe account at https://stripe.com
2. Get your publishable and secret keys from the Stripe dashboard
3. Create products and prices for each service tier:
   - Starter Website (Monthly/Yearly)
   - Professional Website (Monthly/Yearly)
   - Enterprise Website (Monthly/Yearly)
   - Local Business Complete Package (Monthly)
   - E-commerce Complete Package (Monthly)
   - Complete Digital Empire (Monthly)

### 3. PayPal Setup

1. Create a PayPal Developer account at https://developer.paypal.com
2. Create a new app and get your Client ID
3. Update the PayPal SDK script in `index.html` with your actual Client ID

### 4. Backend API (Required)

You'll need to create a backend API endpoint at `/api/create-stripe-checkout` that:

- Accepts POST requests with tier, billing, amount, successUrl, cancelUrl
- Creates a Stripe checkout session
- Returns the session ID

Example backend endpoint:

```javascript
app.post("/api/create-stripe-checkout", async (req, res) => {
  const { tier, billing, amount, successUrl, cancelUrl } = req.body;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: `${tier} Package - ${billing}`,
          },
          unit_amount: amount * 100, // Convert to cents
        },
        quantity: 1,
      },
    ],
    mode: billing === "yearly" ? "payment" : "subscription",
    success_url: successUrl,
    cancel_url: cancelUrl,
  });

  res.json({ sessionId: session.id });
});
```

## Features

### Payment Processing

- **Stripe Integration**: Secure card payments with Stripe Checkout
- **PayPal Integration**: PayPal payments with SDK integration
- **Dynamic Pricing**: Automatically calculates pricing based on tier and billing cycle
- **Loading States**: Shows processing state during payment
- **Error Handling**: Graceful error handling with user feedback

### Success Page

- **Payment Confirmation**: Shows successful payment details
- **Next Steps**: Clear instructions for what happens next
- **Contact Options**: Direct links to support and strategy calls
- **Payment Details**: Displays transaction information

### Pricing Structure

- **Website Services**: Monthly/Yearly options with 28% savings
- **Bundle Packages**: Monthly-only high-ticket packages
- **Dynamic Calculation**: Real-time pricing based on selection

## Testing

### Stripe Test Mode

- Use Stripe test keys for development
- Test with card number: 4242 4242 4242 4242
- Use any future expiry date and CVC

### PayPal Sandbox

- Use PayPal sandbox credentials for testing
- Create test buyer and seller accounts

## Security Notes

- Never expose secret keys in frontend code
- Use environment variables for all sensitive data
- Implement proper backend validation
- Use HTTPS in production
- Validate all payment data server-side

## Support

For payment integration support, contact: mauro.alv99@digital-mal.com
