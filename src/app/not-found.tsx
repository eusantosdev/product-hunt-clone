import Link from "next/link"

export default function NotFound() {
    return(
        <div className="text-center p-4">
            <h1 className="text-sm">404</h1>
            <h1 className="text-2xl p-2">Página não encontrada!</h1>
            <p className="p-2">Está pagina não existe. Por favor, volte para a página inicial</p>
            <Link href="/" className="px-8 py-2 border text-white bg-[#F4320B] border-transparent rounded-full hover:cursor-pointer">
                Voltar para página inicial
            </Link>
        </div>
    )
}