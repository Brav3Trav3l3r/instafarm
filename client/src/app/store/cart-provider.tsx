"use client";

import { ReactNode, useEffect } from "react";
import { CartProvider } from "react-use-cart";

export default function ShoppingCartProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <CartProvider>{children}</CartProvider>;
}
