export type Product = {
    rank: number,
    title: string,
    description: string,
    cover: string,
    comments: string
    votes: string
};

export const products: Product[] = [
  {
    rank: 1,
    title: "ChatPDF",
    description: "Converse com qualquer PDF usando Inteligência Artificial.",
    cover: "https://placehold.co/48x48/F4320B/white?text=CP",
    comments: "20",
    votes: "342",
  },
  {
    rank: 2,
    title: "Notion AI",
    description: "Escreva, resuma e organize suas notas com IA integrada.",
    cover: "https://placehold.co/48x48/000000/white?text=N",
    comments: "15",
    votes: "289",
  },
  {
    rank: 3,
    title: "Gamma",
    description: "Crie apresentações incríveis com IA em segundos.",
    cover: "https://placehold.co/48x48/6C3CE1/white?text=G",
    comments: "13",
    votes: "217",
  },
  {
    rank: 4,
    title: "Synthesia",
    description: "Gere vídeos profissionais com avatares de IA sem câmera.",
    cover: "https://placehold.co/48x48/FF6B6B/white?text=S",
    comments: "17",
    votes: "198",
  },
  {
    rank: 5,
    title: "Framer AI",
    description: "Crie sites completos apenas descrevendo o que você quer.",
    cover: "https://placehold.co/48x48/0099FF/white?text=F",
    comments: "33",
    votes: "175",
  },
  {
    rank: 6,
    title: "Otter.ai",
    description: "Transcreva reuniões e gere resumos automáticos com IA.",
    cover: "https://placehold.co/48x48/00C2A8/white?text=O",
    comments: "28",
    votes: "163",
  },
  {
    rank: 7,
    title: "Perplexity",
    description: "Motor de busca com IA que cita as fontes das respostas.",
    cover: "https://placehold.co/48x48/20B2AA/white?text=P",
    comments: "19",
    votes: "154",
  },
  {
    rank: 8,
    title: "Runway",
    description: "Edite e gere vídeos criativos com Inteligência Artificial.",
    cover: "https://placehold.co/48x48/1A1A2E/white?text=R",
    comments: "35",
    votes: "142",
  },
];