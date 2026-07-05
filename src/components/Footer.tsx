export default function Footer() {
    const categories = ["Engenharia e Desenvolvimento", "LLMs", "Produtividade", "Marketing e vendas", "Design e Criatividade", "Social e Comunidade", "Finanças", "Agentes de IA"];

    return(
        <footer className="w-full p-4 text-[#B4C3D2] bg-[#366899]">
            <div className="max-w-screen-xl mx-auto">
                <h2 className="font-semibold whitespace-nowrap">
                    Principais categorias
                </h2>

                <div className="grid lg:grid-cols-4 gap-4 mt-4">
                    {categories.map((category) => (
                        <a href="#" key={category} className="font-semibold whitespace-nowrap hover:text-white">
                            {category}
                        </a>
                    ))}
                </div>

                <div className="pt-4">
                    <p>© 2026 Product Hunt Clone</p>
                    <ul className="flex flex-wrap gap-4">
                        <li><a href="#">Newsletter</a></li>
                        <li><a href="#">Newsletter</a></li>
                        <li><a href="#">Apps</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">termos</a></li>
                        <li><a href="#">Privacidade e Cookies</a></li>
                        <li><a href="#">Anucie</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}