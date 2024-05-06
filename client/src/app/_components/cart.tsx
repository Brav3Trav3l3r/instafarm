"use client";

import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useCart } from "react-use-cart";
import CheckoutButton from "./checkout-button";

export default function Cart() {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, cartTotal } =
    useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <>
      <h1>Cart ({totalUniqueItems})</h1>

      <ul className="my-2">
        {items.map((item) => (
          <li key={item.id} className="my-2 flex justify-between items-center">
            <p>{item.name}</p>

            <div className="flex gap-2 items-center">
              <Button
                variant={"ghost"}
                size={"icon"}
                onClick={() =>
                  updateItemQuantity(
                    item.id,
                    item.quantity ? item.quantity - 1 : 0
                  )
                }
              >
                <Minus size={14} />
              </Button>

              <p>{item.quantity}</p>

              <Button
                variant={"ghost"}
                size={"icon"}
                onClick={() =>
                  updateItemQuantity(
                    item.id,
                    item.quantity ? item.quantity + 1 : 1
                  )
                }
              >
                <Plus size={14} />
              </Button>
            </div>
          </li>
        ))}
      </ul>

      <hr className="my-2" />

      <div className="flex justify-between items-center my-2">
        <p>Total</p>
        <p>{cartTotal} Rs.</p>
      </div>

      <CheckoutButton amount={cartTotal} />
    </>
  );
}
