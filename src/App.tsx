import MyCard from './components/mycard';
import { movies } from './data/movies';
import { getCategoriesFromMovies } from './utiles/movies';
import { CategoriesFilter } from './components/categories-filter';
import { useState } from 'react';

function App() {
    const [categorySelectionne, setCategorySelectionne] = useState('');

    return (
        <div className="max-w-screen-2xl block mx-auto">
            <div className="flex justify-center items-center my-6">
                <h1 className="text-3xl font-black uppercase">Liste des films</h1>
            </div>

            <div className="flex justify-center items-center mb-10">
                <CategoriesFilter
                    onSelect={(category) => {
                        setCategorySelectionne(category);
                    }}
                    categories={getCategoriesFromMovies(movies)}
                ></CategoriesFilter>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
                {movies
                    .filter((movie) => {
                        return categorySelectionne === '' || movie.category === categorySelectionne;
                    })
                    .map((movie) => {
                        return <MyCard data={movie} />;
                    })}
            </div>
        </div>
    );
}

export default App;
