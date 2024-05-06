import { Order } from "../_definitions/order";

export const createOrder = async (order: Order) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ order }),
  });

  if (!res.ok) {
    throw new Error("Could not create order");
  }

  return res.json();
};
