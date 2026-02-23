import {Card, CardContent} from "../../ui/card";
import Link from "next/link"
import Image from "next/image";
export default function ProductCard({product}) {
    return(<Link href={`/products/${product.id}`}>
        <Card className="p-4">
            <CardContent className="flex flex-col items-center gap-3">

<Image src={product.image} alt={product.title} width={200} height={200} className="h-40 object-contain"/>
<p className="text-sm font-semibold text-center text-black line-clamp-2">{product.title}</p>
<p className="text-lg font-bold text-green-600">{product.price}</p>
            </CardContent>
        </Card></Link>
    )
}