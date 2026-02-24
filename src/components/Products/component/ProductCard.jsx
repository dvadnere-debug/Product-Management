import {Card, CardContent} from "../../ui/card";
import { Heart } from "lucide-react";
import Link from "next/link"
import Image from "next/image";
export default function ProductCard({product}) {
    return(<Link href={`/products/${product.id}`}>
        <Card className="p-4 w-full max-w-xs h-90   ">
            <div><Heart/></div>
            <CardContent className="light:bg-white flex flex-col items-center gap-3">

<Image src={product.image} alt={product.title} width={200} height={200} priority className="h-40 object-contain"/>
<p className="text-sm font-semibold text-center text-black dark:text-white line-clamp-2">{product.title}</p>
<p className="text-lg font-bold text-green-600">${product.price}</p>
            </CardContent>
        </Card></Link>
    )
}