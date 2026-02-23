const URL = "https://fakestoreapi.com/products";

export async function fetchProducts(){
    try{
        const res = await fetch(URL,{cache:"no-store"});
        if (!res.ok) {
            throw new Error(`error, Status: ${res.status}`)
        }
        const data = await res.json();
        return data;

    }
    catch(error){
        console.error("error fetching products:", error.message);
        throw error;
    }
    
}

export async function fetchProductById(id) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      cache: "no-store"
    });

    if (!res.ok) throw new Error("Failed to fetch product");

    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}
