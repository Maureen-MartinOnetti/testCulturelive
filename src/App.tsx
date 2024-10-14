import { Button } from './components/ui/button';
import MyCard from './components/mycard';
import { movies } from './data/movies';
import { getCategoriesFromMovies } from './utiles/movies';

function App() {
    console.log(getCategoriesFromMovies(movies));
    return (
        <div className="max-w-screen-2xl block mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
                {movies.map((movie) => {
                    return <MyCard data={movie} />;
                })}
            </div>
        </div>
    );
}

export default App;
