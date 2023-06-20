import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { options } from "../../configs/key";
import { image_path } from "../../configs/paths";
import './details.css'

function Details(){

    const { id, categoria, pag, texto = "" } = useParams()

    console.log(id);
    console.log(categoria);

    const [movie, setMovie] = useState({})

    useEffect(() =>{

        fetch(`https://api.themoviedb.org/3/movie/${id}?language=pt-BR`, options)
        .then(response => response.json())
        .then(data => {
            const movie = {
                id,
                title: data.title,
                sinopse: data.overview,
                image: `${image_path}${data.poster_path}`,
                releaseDate: data.release_date,
                vote_average: data.vote_average.toFixed(1)
            }

            setMovie(movie)
        })

    }, [id])

    return(
        <div id="details">
             <div id="movie">
                <img src={movie.image} alt={movie.sinopse}/>
                <div id="detail">
                    <h1>{movie.title}</h1>
                    <div className='d-legenda'>
                                    <img src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt='i' style={{width: "20px"}}/>
                                    <h3>{movie.vote_average}</h3>
                            </div>
                    <span>{movie.sinopse}</span>
                    <span id="releaseDate">Data de estréia: {movie.releaseDate}</span>
                    <Link to={`/${categoria}/${pag}/${texto}`}><button>Voltar</button></Link>
                </div>
            </div>
        </div>
       
    );
}

export default Details