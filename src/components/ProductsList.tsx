const apps = [
  {
    hank: 1,
    title: "ChatPDF",
    description: "Converse com qualquer PDF usando Inteligência Artificial.",
    cover: "https://placehold.co/48x48/F4320B/white?text=CP",
    votes: "342",
  },
  {
    hank: 2,
    title: "Notion AI",
    description: "Escreva, resuma e organize suas notas com IA integrada.",
    cover: "https://placehold.co/48x48/000000/white?text=N",
    votes: "289",
  },
  {
    hank: 3,
    title: "Gamma",
    description: "Crie apresentações incríveis com IA em segundos.",
    cover: "https://placehold.co/48x48/6C3CE1/white?text=G",
    votes: "217",
  },
  {
    hank: 4,
    title: "Synthesia",
    description: "Gere vídeos profissionais com avatares de IA sem câmera.",
    cover: "https://placehold.co/48x48/FF6B6B/white?text=S",
    votes: "198",
  },
  {
    hank: 5,
    title: "Framer AI",
    description: "Crie sites completos apenas descrevendo o que você quer.",
    cover: "https://placehold.co/48x48/0099FF/white?text=F",
    votes: "175",
  },
  {
    hank: 6,
    title: "Otter.ai",
    description: "Transcreva reuniões e gere resumos automáticos com IA.",
    cover: "https://placehold.co/48x48/00C2A8/white?text=O",
    votes: "163",
  },
  {
    hank: 7,
    title: "Perplexity",
    description: "Motor de busca com IA que cita as fontes das respostas.",
    cover: "https://placehold.co/48x48/20B2AA/white?text=P",
    votes: "154",
  },
  {
    hank: 8,
    title: "Runway",
    description: "Edite e gere vídeos criativos com Inteligência Artificial.",
    cover: "https://placehold.co/48x48/1A1A2E/white?text=R",
    votes: "142",
  },
];

export default function ProductsList() {
    return(
        <main className="w-full">
            <div className="max-w-screen-xl mx-auto px-4 py-8">
                <h1 className="text-xl font-bold">
                    O Próximo Grande App
                </h1>

                <ul className="flex flex-col gap-4">
                    {apps.map((app) => (
                        <li key={app.title} className="flex items-center gap-4 py-4 xl:hover:bg-[#eceff1] rounded-xl transition-all duration-200">
                            <img src={app.cover} alt={app.title} className="rounded-xl"/>
                            
                            <div className="flex-1">
                                <h3 className="font-semibold">{app.title}</h3>
                                <p className="text-sm text-gray-600">{app.description}</p>
                            </div>

                            <button className="flex flex-col items-center px-3 py-1.5 border-2 border-[#cfd8dc] rounded-md hover:border-[#F4320B] hover:transition-colors duration-200 hover:text-[#F4320B]">
                                <span className="text-xs">▲</span>
                                <span className="text-sm font-semibold text-foreground">{app.votes}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}