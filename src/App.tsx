import MyCard from './components/mycard';
import { movies } from './data/movies';
import { getCategoriesFromMovies } from './utiles/movies';
import { CategoriesFilter } from './components/categories-filter';
import { useState } from 'react';
import {
    Pagination,
    PaginationItem,
    PaginationLink,
    PaginationPrevious,
    PaginationNext,
    PaginationContent
} from './components/ui/pagination';
import { ParPageSelecteur } from './components/affichage-nombre-carte';

function App() {
    const [categorySelectionne, setCategorySelectionne] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage, setMoviesPerPage] = useState(4);

    //Liste de tous les ids supprimés
    const [idsSupp, setIdsSupp] = useState<string[]>([]);

    // Obtenir les films filtrés en fonction de la catégorie sélectionnée
    const filteredMovies = movies
        .filter((movie) => {
            return categorySelectionne === '' || movie.category === categorySelectionne;
        })
        .filter((movie) => {
            //On filtre de nouveau pour enlever les films sont l'id aurait été supprimé et stocké dans mon state idsSupp
            return !idsSupp.includes(movie.id);
        });

    // Calculer les films de la page actuelle
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

    const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="max-w-screen-2xl block mx-auto">
            <div className="flex justify-center items-center my-6">
                <h1 className="text-3xl font-black uppercase">Liste des films</h1>
            </div>

            <div className="flex justify-center items-center mb-10">
                <CategoriesFilter
                    onSelect={(category) => {
                        setCategorySelectionne(category);
                        setCurrentPage(1); // Revenir à la première page lorsque la catégorie change
                    }}
                    categories={getCategoriesFromMovies(movies)}
                />
            </div>

            <div className="flex flex-wrap justify-center gap-4">
                {currentMovies.map((movie) => (
                    <MyCard
                        key={movie.id}
                        data={movie}
                        onClickDelete={(movieId) => {
                            setIdsSupp((prev) => {
                                //Prev est la valeur actuelle de mon state
                                return [...prev, movieId]; //Je viens rajouter l'id du film supprimé à mes valeurs précédentes.
                            });
                        }}
                    />
                ))}
            </div>

            <div className="flex items-center justify-center gap-2 mt-10 mb-4">
                <p className="text-sm">Afficher par:</p>
                <ParPageSelecteur
                    onSelect={(selection) => {
                        setMoviesPerPage(selection);
                        //Reset de la page pour revenir au début
                        setCurrentPage(1);
                    }}
                />
            </div>
            <Pagination className="mb-10">
                <PaginationContent>
                    <PaginationPrevious
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    />
                    {Array.from({ length: totalPages }, (_, index) => (
                        <PaginationItem key={index}>
                            <PaginationLink
                                isActive={currentPage === index + 1}
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                    <PaginationNext
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    />
                </PaginationContent>
            </Pagination>
        </div>
    );
}

export default App;
