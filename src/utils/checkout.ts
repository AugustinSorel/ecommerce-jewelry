import { loadStripe } from "@stripe/stripe-js";
import { ProductsIds } from "./products";

export const checkout = async ({
  lineItems,
}: {
  lineItems: { price: ProductsIds; quantity: number }[];
}) => {
  const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY!);

  await stripe?.redirectToCheckout({
    mode: "payment",
    lineItems,
    successUrl: window.location.origin,
    cancelUrl: window.location.origin,
  });
};
