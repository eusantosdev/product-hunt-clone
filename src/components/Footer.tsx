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
    { label: "Contate-nos: ola@producthuntclone.com", href: "#"}
];

export default function Footer() {
    return(
        <footer className="w-full p-4 bg-footer text-footer-muted">
            <div className="max-w-screen-xl mx-auto">
                <h2 className="font-semibold">
                    Principais categorias
                </h2>

                <div className="grid grid-colors-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 ">
                    {categories.map((category) => (
                        <a href="#" key={category} className="font-semibold hover:text-white transition-colors duration-200">
                            {category}
                        </a>
                    ))}
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-8 pt-6 border-t border-white/20">
                    <p className="text-sm">
                        © 2026 Product Hunt Clone
                    </p>
                    <ul className="text-sm flex flex-wrap gap-6">
                        {links.map((link) => (
                            <li key={link.label}>
                                <a href={link.href} className="hover:text-white hover:underline underline-offset-2 transition-colors duration-200">
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