export type Upcoming = {
    title: string;
    description: string;
    cover: string;
    category: string;
    launchDate: string;
    notify: boolean;
};

export const upcomings: Upcoming[] = [
    {
        title: "MindFlow",
        description: "Organize seus pensamentos e ideias com mapas mentais gerados por IA.",
        cover: "https://placehold.co/48x48/6C3CE1/white?text=MF",
        category: "Produtividade",
        launchDate: "20 Jul 2026",
        notify: false,
    },
  {
        title: "CodeSnap",
        description: "Gere snippets de código automaticamente a partir de descrições em texto.",
        cover: "https://placehold.co/48x48/F4320B/white?text=CS",
        category: "Engenharia",
        launchDate: "25 Jul 2026",
        notify: false,
  },
  {
        title: "VoiceDoc",
        description: "Transforme áudios e reuniões em documentos estruturados com IA.",
        cover: "https://placehold.co/48x48/00C2A8/white?text=VD",
        category: "IA",
        launchDate: "01 Ago 2026",
        notify: false,
  },
  {
        title: "DesignPilot",
        description: "Gere interfaces completas a partir de descrições simples em português.",
        cover: "https://placehold.co/48x48/0099FF/white?text=DP",
        category: "Design",
        launchDate: "05 Ago 2026",
        notify: false,
  },
];