
import { Button } from "../../../components/ui/button";
import { fetchProductById } from "../../../services/productApi"
import Image from "next/image";
import Link from "next/link";
import { ButtonAddToCart } from "../../../components/web/ButtonAddToCart";
export default async function ProductDetail({ params }) {

  const { id } = await params;
  const product = await fetchProductById(id);

  if (!product) {
    return <div className="p-6">Product not found</div>;
  }
    

  return (
    <div className="relative max-w-5xl mx-auto p-8 grid md:grid-cols-2 gap-10">
      <Link
        href="/products"
        className="absolute top-4 left-4 rounded-2xl p-1 shadow"
        aria-label="Back to products"
      ><Button>Go Back</Button>
       
      </Link>

      <div className="flex justify-center">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{product.title}</h1>

        <p className="text-gray-600">{product.category}</p>

        <p className="text-xl font-semibold text-green-600">
          ${product.price}
        </p>

        <p className="text-gray-300">{product.description}</p>

        <p className="text-sm">
           Rating: {product.rating?.rate} ({product.rating?.count} reviews)
        </p>
              <span><ButtonAddToCart/><Button className="ml-4">Checkout</Button></span>

      </div>

    </div>
  );
}
