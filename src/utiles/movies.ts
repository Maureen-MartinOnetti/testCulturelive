import { Movie } from '@/data/movies';

export function getCategoriesFromMovies(movies: Movie[]) {
    // récupérer les catégories d'un array movie
    const categories: string[] = [];
    for (let i = 0; i < movies.length; i++) {
        const movie = movies[i];
        const category = movie.category;
        if (!categories.includes(category)) {
            categories.push(category);
        }
    }
    return categories;
}
