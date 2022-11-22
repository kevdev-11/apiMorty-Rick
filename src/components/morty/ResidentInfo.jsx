import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Letsmorty = ({ url}) => {

    const [character, setCharacter] = useState(0);

    useEffect(() => {
        axios.get(url).then(res => setCharacter(res.data))
    }, [url]);

    // console.log(character);

    return (
        <div className='character-cards'>
            <ul >
                <li><h1 className='about_title'>{character.name}</h1></li>
                <li><h3 style={{ fontSize: '18px' }}>{character.species}</h3></li><br />
                <li><img style={{ width: '210px', height: '210px' }} className='pictures' src={character.image} alt="" /></li>
                <li><h3 style={{ fontSize: '16px', color: 'gray' }}>{character.status}{" "}
                    {character.status === 'Alive' ? <i style={{ color: 'green' }}
                        className="fa-solid fa-face-smile"></i> : <i
                            style={{ color: 'red' }} className="fa-solid fa-face-sad-tear"></i>}
                </h3>
                </li>
                <li><p>Origin:{" "}<span className='data-origin'>{character.origin?.name}</span></p></li>
                <li><p>Episodes where appear:{" "}<span className='data-origin'>{character.episode?.length}</span></p></li>
            </ul>
        </div>
    );
};

export default Letsmorty;