"use client";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// Loading Stripe outside of component to avoid recreating the Stripe object
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export function StripeProvider({ children }) {
  return <Elements stripe={stripePromise}>{children}</Elements>;
}
