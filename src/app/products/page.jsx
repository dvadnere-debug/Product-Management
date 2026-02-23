import { fetchProducts } from "../../services/productApi";
import ProductCard from "../../components/Products/component/ProductCard";
import FilterBar from "../../components/Products/FilterBar";
export default async function ProductsPage({ searchParams={} }) {
  const params = await searchParams
  const products = await fetchProducts();
  const category = params.category || "";
  const search = params.search || "";
  const minPrice = Number(params.minPrice || 0);
  const filteredProducts = products
    .filter((p) => (category ? p.category === category : true))
    .filter((p) =>
      search ? p.title.toLowerCase().includes(search.toLowerCase()) : true,
    )
    .filter((p) => p.price >= minPrice);

  const men = products.filter((p) => p.category.includes("men"));
  const women = products.filter((p) => p.category.includes("women"));
console.log(products.map(p => p.category));

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <FilterBar />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
    // <div className="max-w-7xl mx-auto p-8 space-y-12">
    //     <div>
    //         <h2 className="text-2xl font-oswald uppercase mb-6">Men&apos;s Collection</h2>
    //         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    //             {men.map(product => <ProductCard key={product.id} product={product}/>)}
    //         </div>
    //     </div>

    //     <div >
    //         <h2 className="text-2xl font-oswald uppercase mb-6">
    //         Women&apos;s Collection</h2>
    // <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    //   {women.map(product => (
    //     <ProductCard key={product.id} product={product} />
    //   ))}
    // </div>
    //     </div>
    // </div>
  );
}
