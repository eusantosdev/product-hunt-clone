export default function ProductsList() {
    const categories = ["IA", "Marketing", "Produtividade", "SaaS", "Tech"];

    return(
        <section className="container items-center mx-auto p-4 flex justify-between">
            <h3>Tranding Topics</h3>
            <div className="flex gap-4">
                {categories.map((categorie) => (
                    <button key={categorie} className="p-2 rounded-md bg-[#F87C63] hover:bg-[#F4320B]">
                        {categorie}
                    </button>
                ))}
            </div>
        </section>
    )
}