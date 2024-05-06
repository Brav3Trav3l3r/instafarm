import Link from "next/link";
import z from "zod";

const Product = z.object({
  _id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  image: z.string(),
  category: z.array(z.string()),
});

type TProduct = z.infer<typeof Product>;

const getProducts = async (): Promise<{
  status: string;
  data: TProduct[];
}> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products`,
    { cache: "no-cache" }
  );

  if (!res.ok) {
    throw new Error("Could not retrieve products");
  }

  return res.json();
};

export default async function Products() {
  const { data } = await getProducts();

  return (
    <>
      <p className="text-4xl font-semibold">Our Products</p>

      <div className="grid grid-cols-4 gap-8">
        {data.map((product) => (
          <div key={product._id} className="shadow-xl p-4">
            <Link
              href={`/product/${product._id}`}
              className="block relative h-48 rounded overflow-hidden"
            >
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src={product.image}
              />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                {product.category.map((category) => category)}
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                {product.name}
              </h2>
              <p className="mt-1">{product.price} Rs</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
