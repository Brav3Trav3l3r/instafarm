import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";
import Products from "./_components/products";
import Categories from "./_components/categories";

export default function Home() {
  return (
    <div className="">
      {/* <Hero /> */}
      <div className="container space-y-10 my-8">
        {/* <Categories /> */}
        <Products />
      </div>
    </div>
  );
}
