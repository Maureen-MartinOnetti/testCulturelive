export type Movie = {
    //je defini le type d'un movie
    id: string;
    title: string;
    category: string;
    likes: number;
    dislikes: number;
    image: string;
};

export const movies: Movie[] = [
    // j'assigne le type array de movie à la constante
    {
        id: '1',
        title: 'Oceans 8',
        category: 'Comedy',
        likes: 4,
        dislikes: 1,
        image: 'https://m.media-amazon.com/images/M/MV5BMjAyNDEyMzc4Ml5BMl5BanBnXkFtZTgwMjEzNjM0NTM@._V1_FMjpg_UX1000_.jpg'
    },
    {
        id: '2',
        title: 'Midnight Sun',
        category: 'Comedy',
        likes: 2,
        dislikes: 0,
        image: 'https://m.media-amazon.com/images/M/MV5BMjg0NjU1MjgyNF5BMl5BanBnXkFtZTgwNzc5NjYyNDM@._V1_.jpg'
    },
    {
        id: '3',
        title: 'Les indestructibles 2',
        category: 'Animation',
        likes: 3,
        dislikes: 1,
        image: 'https://m.media-amazon.com/images/M/MV5BMTEzNzY0OTg0NTdeQTJeQWpwZ15BbWU4MDU3OTg3MjUz._V1_QL75_UX190_CR0,0,190,281_.jpg'
    },
    {
        id: '4',
        title: 'Sans un bruit',
        category: 'Thriller',
        likes: 6,
        dislikes: 6,
        image: 'https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_QL75_UX190_CR0,0,190,281_.jpg'
    },
    {
        id: '5',
        title: 'Creed II',
        category: 'Drame',
        likes: 16,
        dislikes: 2,
        image: 'https://m.media-amazon.com/images/M/MV5BMDRkMTgyOTItMzM4Zi00ZDhmLTliZmItOWZmNmM3MzNjZTQzXkEyXkFqcGc@._V1_.jpg'
    },
    {
        id: '6',
        title: 'Pulp Fiction',
        category: 'Thriller',
        likes: 11,
        dislikes: 3,
        image: 'https://static.posters.cz/image/750/1288.jpg'
    },
    {
        id: '7',
        title: 'Pulp Fiction',
        category: 'Thriller',
        likes: 12333,
        dislikes: 32,
        image: 'https://static.posters.cz/image/750/1288.jpg'
    },
    {
        id: '8',
        title: 'Seven',
        category: 'Thriller',
        likes: 2,
        dislikes: 1,
        image: 'https://m.media-amazon.com/images/M/MV5BY2IzNzMxZjctZjUxZi00YzAxLTk3ZjMtODFjODdhMDU5NDM1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
    },
    {
        id: '9',
        title: 'Inception',
        category: 'Thriller',
        likes: 2,
        dislikes: 1,
        image: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg'
    },
    {
        id: '10',
        title: 'Gone Girl',
        category: 'Thriller',
        likes: 22,
        dislikes: 12,
        image: 'https://m.media-amazon.com/images/M/MV5BNTFkN2UwZjYtNzI5OC00MTNlLTgwNTEtYjBkOGZiNmY5NDg4XkEyXkFqcGc@._V1_.jpg'
    }
];

export const fakeMoviesApiRequest = new Promise<Movie[]>((resolve) => setTimeout(resolve, 100, movies));
// fausse requete API
// je type la promise par un array de movie
