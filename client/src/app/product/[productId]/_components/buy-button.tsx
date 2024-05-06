"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "react-use-cart";

interface Product {
  id: string;
  price: number;
  [propName: string]: any;
}

export default function BuyButton({ product }: { product: Product }) {
  const { addItem } = useCart();

  const handleClick = async () => {
    addItem(product);
  };

  return <Button onClick={handleClick}>Buy</Button>;
}
