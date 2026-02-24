"use client";
import { Search, X, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import ProductCard from "../Products/component/ProductCard";
import { fetchProducts } from "../../services/productApi"
import ProductCarousel from "../Products/ProductCarousel";

export function SearchOverlay() {
  
  const scrollRef = useRef(null);
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(()=>{
    async function loadProducts(){
      const data = await fetchProducts();
      setProducts(data);
    }
    loadProducts();
  },[]);
  const filteredProducts = products.filter((p)=> p.title.toLowerCase().includes(query.toLowerCase()));

  const popularProducts = products.filter((p)=> p.rating?.rate>=4)
  .slice(0,6);

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };
  

  return (
    <div className="fixed inset-0 bg-white z-50 p-10 overflow-y-auto">
      <div className="max-w-7xl mx-auto flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 bg-[#F2F2F2] p-4 w-full mb-10">
            <Search className="w-6 h-6 text-black" />
            <input 
              value={query}
              onChange={(e)=> setQuery(e.target.value)}
              className="text-black uppercase text-3xl font-oswald font-bold caret-black w-full bg-transparent outline-none placeholder:text-[#CCCCCC]"
              placeholder="TYPE TO SEARCH"
              autoFocus
            />
          </div>

          <div className="mb-10">
            <p className="text-[12px] font-oswald uppercase tracking-widest mb-4 text-black font-bold">
              Popular Searches
            </p>
            <div className="relative w-full">
              <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto scroll-smooth [scrollbar-width:none] pr-12"
              >
                {[
                  "CLUBMASTER EYEGLASSES",
                  "TITANIUM EYEGLASSES",
                  "AVIATOR EYEGLASSES",
                  "MOST POPULAR",
                  "BLAZE COLLECTION",
                  "CLUBMASTER EYEGLASSES",

                  "CLUBMASTER EYEGLASSES",
                ].map((item, i) => (
                  <button
                    key={i}
                    className="shrink-0 border border-black px-8 py-3 text-black uppercase font-oswald text-sm"
                  >
                    {item}
                  </button>
                ))}
              </div>
              <button
                onClick={scrollRight}
                className="absolute right-0 top-0 bottom-0 bg-[#222222] text-white px-3 flex items-center justify-center"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
          {query && (
            <>
              <p className="text-lg font-bold mb-4 text-black">
                Search Results
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          )}
{/* 
          <div>
            <p className="text-[12px] font-oswald uppercase tracking-widest mb-4 text-black font-bold">
              Popular Items
            </p>
          </div> */}

          {!query && (
            <>
            <p className="text-[12px] font-oswald uppercase tracking-widest mb-4 text-black font-bold">Popular Products</p>
               {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {popularProducts.map((product)=>(
              <ProductCard className="bg-white"  key={product.id} product={product}/>
            ))}</div> */}
            <ProductCarousel products={popularProducts}/>
            </>
          )}
        </div>

        <button className="ml-16 mt-2">
          <X onClick={()=> router.push("/products")}
            className="w-10 h-10 cursor-pointer text-black hover:opacity-70 transition-opacity"
            strokeWidth={1}
          />
        </button>
      </div>
    </div>
  );
}
