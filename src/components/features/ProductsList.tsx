import { products } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";

export default function ProductsList() {
    return(
        <main>
            <h1 className="text-xl font-bold">
                O Próximo Grande App
            </h1>
            <ul className="py-4 flex flex-col gap-4">
                {products.map((product) => (
                    <ProductCard
                        key={product.rank}
                        product={product}
                    />
                ))}
            </ul>
        </main>
    )
}