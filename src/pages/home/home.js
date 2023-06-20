import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import { options } from '../../configs/key';
import { image_path } from '../../configs/paths';
import './home.css'

function Home(){
    const {categoria = "popular", pag = 1} = useParams();

    const [page, setPage] = useState(1);

    useEffect(() => {
        const num = parseInt(pag, 10);
        setPage(num);
    }, [pag, categoria])

    const pageFw = () => {
      setPage(page + 1);
      window.scrollTo(0, 0);
    };
  
    const pageBack = () => {
        if(page > 1){
            setPage(page - 1);
            window.scrollTo(0, 0);
        }
    };

    const [movies, setMovies] = useState([])

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${categoria}?language=pt-BR&page=${page}`, options)
        .then(response => response.json())
        .then(data => {
            setMovies(data.results)
        })

    }, [pag, categoria, page])

    return(
        <div id="main">
            <ul>
                {movies.map(movie =>{
                    return(
                        <li key={movie.id}>
                            <div className='banner'>
                            <Link to={`/details/${movie.id}/${categoria}/${page}`}>
                                <img src={`${image_path}${movie.poster_path}`} alt={`${image_path}${movie.poster_path}`}/>
                            </Link>
                            <div className='legenda'>
                                    <img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt='i' style={{width: "20px"}}/>
                                    <h3>{movie.vote_average.toFixed(1)}</h3>
                            </div>
                            </div>
                            <span>{movie.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div className='pages'>
                <ul>
                    <li><button onClick={pageBack}>{"<"}</button></li>
                    <li><h2>{page}</h2></li>
                    <li><button onClick={pageFw}>{">"}</button></li>
                </ul>  
            </div>
        </div>
    );
}

export default Home;
