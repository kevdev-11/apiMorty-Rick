import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Letsmorty from './ResidentInfo';
import DataRmorty from './DataRmorty';

const Rmorty = () => {

    const [location, setLocation] = useState({});
    const [searcher, setSearcher] = useState([]);
    const [put, setPut] = useState("");
    const [page, setPage] = useState(1);



    useEffect(() => {
      
         const shuffle = Math.floor(Math.random() * 126) + 1;
            axios.get(`https://rickandmortyapi.com/api/location/${shuffle}`)
                .then(res => setLocation(res.data))

    }, []);

    useEffect(() => {
        if (put) {

            axios.get(`https://rickandmortyapi.com/api/location?name=${put}`)
                .then(res => setSearcher(res.data.results))
        }
        else {
            setSearcher([])
        }
    }, [put]);

    const cutSearcher = searcher.slice(0, 5);

    // console.log(searcher);

    const localizedId = () => {
        if (put < 126+1) {
            axios.get(`https://rickandmortyapi.com/api/location/${put}`)
                .then(res => setLocation(res.data))
                .catch(console.error('not is a name, is a number'))
        } else { alert('solo estan permitidos hasta 126 elementos') };
    }


    const numberInPage = 8;
    const lastInPage = page * numberInPage;
    const firstInPage = lastInPage - numberInPage;
    let totalPage = [];


    totalPage = location.residents?.slice(firstInPage, lastInPage);



    const buttonsPerPage = Math.ceil(location.residents?.length / numberInPage);

    const numbers = [];
    for (let i = 1; i <= buttonsPerPage; i++) {
        numbers.push(i);
    }
    console.log(totalPage);
    console.log(page);
    console.log(location);
    return (
        <div className='display'>
            <DataRmorty props={location} />
            <div className='input_model'>
                <input
                    className='input-search'
                    type="text"
                    defaultValue={put.location?.name}
                    placeholder='put the name or ID here or take any of the list'
                    onChange={((e) => setPut(e.target.value))} />
                <button
                    style={{ borderRight: '2px solid gray' }}
                    onClick={localizedId}>
                    
                    <i
                        style={{ fontSize: '38px', border: 'none', color: 'white', backgroundColor: 'rgb(112, 11, 104)', padding: '10px', marginLeft: '-9px' }}
                        className="fa-solid fa-magnifying-glass">
                    </i>
                </button>
            </div>
            <span className='search-display'>
                {cutSearcher.map((searcher) =>
                    <li onClick={() => setLocation(searcher)} className='list-suggest'>{searcher.name}</li>
                )}
            </span>
            <div className='cards'>

                {totalPage?.map((resident) => (
                    
                    <Letsmorty url={resident} key={resident}/>
                ))}
            </div>
            <div className='contain-buttons'>
                <button style={{ borderRadius: '50%'}} onClick={() => setPage(page - 1)} disabled={page === 1}>Back</button>
                <div>
                        {numbers.map((number) => <button style={{ backgroundColor: 'white', borderRadius: '50%', color: 'rgb(112, 11, 104)', fontSize: '25px' }} onClick={() => setPage(number)}>
                    {number}</button>)}
                </div>
                <button style={{ borderRadius: '50%' }} onClick={() => setPage(page + 1)} disabled={page === buttonsPerPage}>Next</button>
            </div>
        </div>
    );


};

export default Rmorty;