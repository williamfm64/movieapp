import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import './header.css'

function Topbar(){

    const [texto, setTexto] = useState('');

    const handleTextoChange = (event) => {
      setTexto(event.target.value);
    };

    const linkRef = useRef(null);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
        event.preventDefault();
        linkRef.current.click();
        }
    };

    return(
        <div id="header">
            <h1>The movie list</h1>

            <ul>

                <li>
                    <Link to="/popular/1" className='link'>Populares</Link>
                </li>
                <li>
                    <Link to="/top_rated/1" className='link'>Melhores Ever</Link>
                </li>
                <li>
                    <Link to="/search/1/nada" className='link'>Pesquisa</Link>
                </li>
                <li id='search-box'>
                    <input type="text" onKeyDown={handleKeyDown} value={texto} onChange={handleTextoChange} />
                </li>
                <li>
                    <div role="button" tabIndex="0" onKeyDown={handleKeyDown}>
                        <Link ref={linkRef} className='link' to={`/search/1/${texto}`}>Go!</Link>
                    </div>
                    
                </li>

            </ul>

        </div>
    );
}

export default Topbar