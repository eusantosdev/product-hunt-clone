import { products, type Product } from "@/data/products";

export default function ProductsList() {
    return(
        <main className="w-full">
            <div className="max-w-screen-xl mx-auto">
                <h1 className="text-xl font-bold">
                    O Próximo Grande App
                </h1>

                <ul className="flex flex-col gap-4">
                    {products.map((product) => (
                        <li key={product.title} className="flex items-center gap-4 py-4 xl:hover:bg-[#eceff1] rounded-xl transition-all duration-200">
                            <img src={product.cover} alt={product.title} className="rounded-xl"/>
                            
                            <div className="flex-1">
                                <h3 className="font-semibold">{product.rank}. {product.title}</h3>
                                <p className="text-sm text-gray-600">{product.description}</p>
                            </div>

                            <button className="flex flex-col items-center px-4 py-1.5 border-2 border-[#cfd8dc] rounded-md hover:border-[#F4320B] hover:transition-colors duration-200 hover:text-[#F4320B]">
                                <span className="text-xs">▲</span>
                                <span className="text-sm font-semibold text-foreground">{product.comments}</span>
                            </button>

                            <button className="flex flex-col items-center px-3 py-1.5 border-2 border-[#cfd8dc] rounded-md hover:border-[#F4320B] hover:transition-colors duration-200 hover:text-[#F4320B]">
                                <span className="text-xs">▲</span>
                                <span className="text-sm font-semibold text-foreground">{product.votes}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}