// Payment utility functions for Stripe and PayPal integration

export const createStripeCheckout = async (tier, billing, amount) => {
  try {
    // This would typically call your backend API to create a Stripe checkout session
    const response = await fetch("/api/create-stripe-checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tier,
        billing,
        amount,
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/services`,
      }),
    });

    const { sessionId } = await response.json();

    // Redirect to Stripe Checkout
    const stripe = window.Stripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
    const { error } = await stripe.redirectToCheckout({
      sessionId: sessionId,
    });

    if (error) {
      console.error("Stripe checkout error:", error);
      alert("Payment failed. Please try again.");
    }
  } catch (error) {
    console.error("Error creating Stripe checkout:", error);
    alert("Payment system error. Please try again.");
  }
};

export const getPricing = () => {
  return {
    starter: { monthly: 497, yearly: 4997 },
    professional: { monthly: 997, yearly: 9997 },
    enterprise: { monthly: 1497, yearly: 14997 },
    "local-business": { monthly: 1997 },
    "ecommerce-complete": { monthly: 2997 },
    "digital-empire": { monthly: 4997 },
  };
};

export const formatTierName = (tier) => {
  const tierNames = {
    starter: "Starter Website",
    professional: "Professional Website",
    enterprise: "Enterprise Website",
    "local-business": "Local Business Complete Package",
    "ecommerce-complete": "E-commerce Complete Package",
    "digital-empire": "Complete Digital Empire",
  };

  return tierNames[tier] || tier;
};
