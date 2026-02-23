import { fetchProductById } from "../../../services/productApi"
import Image from "next/image";

export default async function ProductDetail({ params }) {

  const { id } = await params;
  const product = await fetchProductById(id);

  if (!product) {
    return <div className="p-6">Product not found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-8 grid md:grid-cols-2 gap-10">

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

        <p className="text-gray-700">{product.description}</p>

        <p className="text-sm">
           Rating: {product.rating?.rate} ({product.rating?.count} reviews)
        </p>
      </div>

    </div>
  );
}
