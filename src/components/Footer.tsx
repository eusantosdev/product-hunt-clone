export default function Footer() {
    const categories = ["Engenharia e Desenvolvimento", "LLMs", "Produtividade", "Marketing e vendas", "Design e Criatividade", "Social e Comunidade", "Finanças", "Agentes de IA"];

    return(
        <footer className="w-full max-w-screen-xl mx-auto p-4">
            <h2 className="font-semibold whitespace-nowrap">
                Principais categorias
            </h2>
            <div className="grid lg:grid-cols-4 gap-4">
                {categories.map((category) => (
                    <div 
                    key={category}
                    >
                    {category}
                    </div>
                ))}
            </div>
        </footer>
    )
}