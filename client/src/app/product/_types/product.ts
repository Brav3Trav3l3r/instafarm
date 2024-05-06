import { z } from "zod";

const Product = z.object({
  _id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  image: z.string(),
  category: z.array(z.string()),
});

export type TProduct = z.infer<typeof Product>;
