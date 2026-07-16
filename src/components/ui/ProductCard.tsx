import { Product } from "@/types";
import VoteButton from "./VoteButton";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product } : ProductCardProps) {
    return(   
        <div className="flex items-center gap-4 py-4 xl:hover:bg-[#eceff1] rounded-xl transition-all duration-200">
            <img src={product.cover} alt={product.title} className="rounded-xl"/>
            <div className="flex-1">
                <h3 className="font-semibold">{product.rank}. {product.title}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
                <div className="flex gap-2">
                    {product.category.map((cat) => (
                        <a key={cat} href="#" className="text-xs py-1 hover:underline">
                            {cat}
                        </a>
                    ))}
                </div>
            </div>
            <VoteButton 
                votes={product.votes} 
            />
        </div>
    )
}