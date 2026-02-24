"use client";
 import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

import ProductCard from "./component/ProductCard";

export default function ProductCarousel({products}){
    return(
        <Carousel       opts={{ align: "start", dragFree: true }}
 className="w-full max-w-7xl mx-auto">
            <CarouselContent>
                {products.map((product)=> (
                    <CarouselItem key={product.id}
                    className=" basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/">
                        <ProductCard product={product}/>
                    </CarouselItem>
                ))}

            </CarouselContent>
        </Carousel>
    )
}