import { Link } from 'react-router-dom';
import { useState } from 'react';
import './header.css'

function Topbar(){

     const [texto, setTexto] = useState('');

    const handleTextoChange = (event) => {
      setTexto(event.target.value);
    };

    return(
        <div id="header">
            <h1>The movie list</h1>

            <ul>

                <li>
                    <Link to="/popular" className='link'>Populares</Link>
                </li>
                <li>
                    <Link to="/top_rated" className='link'>Melhores Ever</Link>
                </li>
                <li>
                    <Link to="/login" className='link'>Minha Lista</Link>
                </li>
                <li>
                    <Link to="/search" className='link'>Pesquisa</Link>
                </li>
                <li id='search-box'>
                    <input type="text" value={texto} onChange={handleTextoChange} />
                </li>
                <li>
                    <Link className='link' to={`/search/${texto}`}>Go!</Link>
                </li>

            </ul>

        </div>
    );
}

export default Topbar