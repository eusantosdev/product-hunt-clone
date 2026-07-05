const categories = [
    "Engenharia e Desenvolvimento", 
    "LLMs", 
    "Produtividade", 
    "Marketing e vendas", 
    "Design e Criatividade",
     "Social e Comunidade", 
     "Finanças", 
     "Agentes de IA"
    ];

const links = [
    { label: "Newsletter", href: "#"},
    { label: "Apps", href: "#"},
    { label: "Sobre", href: "#"},
    { label: "FAQ", href: "#"},
    { label: "Nossos termos", href: "#"},
    { label: "Privacidade e Cookies", href: "#"},
    { label: "Anucie aqui", href: "#"},
]

export default function Footer() {
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

                <div className="pt-8">
                    <p className="text-sm">
                        © 2026 Product Hunt Clone
                    </p>
                    <ul className="flex flex-wrap gap-6">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a href={link.href}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}