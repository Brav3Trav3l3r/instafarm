"use client";

import { load } from "@cashfreepayments/cashfree-js";
import { Button } from "@/components/ui/button";
import { createOrder } from "../_actions/create-order";
import { Order } from "../_definitions/order";
import { getUserInfo } from "../_actions/auth";
import { useCart } from "react-use-cart";

let cashfree;

const initializeSDK = async function () {
  cashfree = await load({
    mode: "sandbox",
  });
};
initializeSDK();

const doPayment = async (paymentSessionId: string) => {
  let checkoutOptions = {
    paymentSessionId,
    redirectTarget: "_self",
  };

  cashfree.checkout(checkoutOptions);
};

const order = {
  order_amount: 0,
  order_currency: "INR",
  customer_details: {
    customer_id: "",
    customer_name: "",
    customer_phone: "",
  },
  order_meta: {
    return_url: "http://localhost:3000/",
  },
};

export default function CheckoutButton({ amount }: { amount: number }) {
  const { emptyCart } = useCart();
  order.order_amount = amount;

  const handleCheckout = async () => {
    try {
      const { data: userInfo } = await getUserInfo();
      const { name, phoneNumber, _id } = userInfo;

      order.customer_details.customer_id = _id;
      order.customer_details.customer_name = name;
      order.customer_details.customer_phone = phoneNumber;

      const { data } = await createOrder(order);
      const { payment_session_id }: { payment_session_id: string } = data;

      if (!payment_session_id) {
        throw new Error("Failed to create payment session");
      }

      console.log(payment_session_id);

      doPayment(payment_session_id);

      emptyCart();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Button className="w-full mt-4" onClick={handleCheckout}>
      Checkout
    </Button>
  );
}
