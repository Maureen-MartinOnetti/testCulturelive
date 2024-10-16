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
    PaginationNext
} from './components/ui/pagination';

function App() {
    const [categorySelectionne, setCategorySelectionne] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const moviesPerPage = 5; // Nombre de films à afficher par page

    // Obtenir les films filtrés en fonction de la catégorie sélectionnée
    const filteredMovies = movies.filter((movie) => {
        return categorySelectionne === '' || movie.category === categorySelectionne;
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
                    <MyCard key={movie.id} data={movie} />
                ))}
            </div>

            <Pagination className="mt-10">
                <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
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
            </Pagination>
        </div>
    );
}

export default App;
