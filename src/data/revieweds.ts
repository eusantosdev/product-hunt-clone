export type Reviewed = {
    title: string,
    description: string,
    cover: string,
    rating: number;
};

export const revieweds: Reviewed[] = [
    {
        title: "ChatPDF",
        description: "Converse com qualquer PDF usando Inteligência Artificial.",
        cover: "https://placehold.co/48x48/F4320B/white?text=CP",
        rating: 5,
    },
    {
        title: "Notion AI",
        description: "Escreva, resuma e organize suas notas com IA integrada.",
        cover: "https://placehold.co/48x48/000000/white?text=N",
        rating: 4,
    },
];