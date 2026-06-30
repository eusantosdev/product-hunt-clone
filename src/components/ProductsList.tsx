export default function ProductsList() {
    return(
        <section className="container items-center mx-auto p-4 flex justify-between">
            <h3>Tranding Topics</h3>
            <div className="flex gap-4">
                <button className="p-2 rounded-md bg-[#F87C63] hover:bg-[#F4320B]">
                    IA
                </button>
                <button className="p-2 rounded-md bg-[#F87C63] hover:bg-[#F4320B]">
                    Marketing
                </button>
                <button className="p-2 rounded-md bg-[#F87C63] hover:bg-[#F4320B]">
                    Produtividade
                </button>
                <button className="p-2 rounded-md bg-[#F87C63] hover:bg-[#F4320B]">
                    SaaS
                </button>
                <button className="p-2 rounded-md bg-[#F87C63] hover:bg-[#F4320B]">
                    Tech
                </button>
            </div>
        </section>
    )
}