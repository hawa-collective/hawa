import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export const metadata = {
  title: "Sanitary Hub - Hawa Collective",
};

export default async function Page() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  let { data: products, error } = await supabase
    .from("Menstrual Product List")
    .select("*");

  if (error) {
    console.error("Error fetching products:", error);
  }

  // console.log("Products:", products);

  return (
    <>
      <h1>All Products</h1>
      {products?.map((product) => (
        <p key={product.id}>{product.product} - {product.price} Ksh</p>
      ))}
    </>
  );
}
