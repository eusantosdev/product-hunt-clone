export type Product = {
    rank: number,
    title: string,
    description: string,
    cover: string,
    category: string[],
    votes: string
};

export type Reviewed = {
    title: string,
    description: string,
    cover: string,
    rating: number;
};

export type Upcoming = {
    title: string;
    description: string;
    cover: string;
    category: string;
    launchDate: string;
    notify: boolean;
};



