export default function ProductsList() {
    const categories = ["IA", "Marketing", "Produtividade", "SaaS", "Tech"];

    return(
        <section className="w-full max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <h3 className="text-heading font-semibold whitespace-nowrap">
                Trending Topics
            </h3>

            <div className="flex gap-2 overflow-x-auto scrollber-none">
                {categories.map((category) => (
                    <button key={category} className="p-2 rounded-md bg-[#F87C63] hover:bg-[#F4320B] whitespace-nowrap">
                        {category}
                    </button>
                ))}
            </div>
        </section>
    )
}