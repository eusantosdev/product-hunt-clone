import { products, type Product } from "@/data/products";

export default function ProductCard() {
    return(
        <ul className="py-4 flex flex-col gap-4">
            {products.map((product) => (
                <li key={product.title} className="flex items-center gap-4 py-4 xl:hover:bg-[#eceff1] rounded-xl transition-all duration-200">
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

                    <button className="flex flex-col items-center px-3 py-1.5 border-2 border-[#cfd8dc] rounded-md hover:border-[#F4320B] hover:transition-colors duration-200 hover:text-[#F4320B]">
                        <span className="text-xs">▲</span>
                        <span className="text-sm font-semibold text-foreground">{product.votes}</span>
                    </button>
                </li>
            ))}
        </ul>
    )
}