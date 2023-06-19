import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { options } from '../../configs/key';
import { image_path } from '../../configs/paths';
import '../home/home.css'

function Search(){

    const { texto = "a procura"} = useParams();

    console.log(texto)

    const [page, setPage] = useState(1);

    const pageFw = () => {
      setPage(page + 1);
    };
  
    const pageBack = () => {
        if(page > 1){
            setPage(page - 1);
        }
      
    };

    const [movies, setMovies] = useState([])

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/search/movie?query=${texto}&include_adult=false&language=pt-BR&page=${page}`, options)
        .then(response => response.json())
        .then(data => {
            console.log(data.results)
            setMovies(data.results)
        })

    }, [page, texto])

    useEffect(() => {

        setPage(1);

    }, [texto])

    return(
        <div id="main">
            <ul>
                {movies.map(movie =>{
                    return(
                        <li key={movie.id}>
                            <div className='banner'>
                            <Link to={`/details/${movie.id}/search`}>
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

export default Search