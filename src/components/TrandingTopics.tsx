export default function TrandingTopics() {
    const categories = ["IA", "Marketing", "Produtividade", "SaaS", "Tech"];

    return(
        <section className="w-full">
            <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-4 py-2">
                <h1 className="text-foreground font-semibold">
                    Principais Tópicos
                </h1>

                <div className="flex gap-2 overflow-x-auto scrollbar-none">
                    {categories.map((category) => (
                        <button key={category} className="text-white text-sm font-medium p-2 rounded-md bg-[#F87C63] hover:bg-[#F4320B] transition-colors duration-200">
                            {category}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}