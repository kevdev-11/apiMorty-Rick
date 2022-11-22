import React from 'react';


const DataRmorty = ({ props }) => {
    console.log(props)
    return (
        <div className='bar-index'>
            <div>
                <h1>{props.name}</h1>
            </div>
            <div className='grid-index'>
                <span className='text-bar'> <b>Type:</b>
                    <p
                        style={{ fontFamily: 'Sono', fontSize: '20px', marginTop: '10px', color: 'yellow' }}>
                        {props.type}
                    </p>
                </span>
                <span className='text-bar'> <b>Dimensión: </b> <br />
                    <p
                        style={{ fontFamily: 'Sono', fontSize: '20px', marginTop: '10px', color: 'yellow' }}>
                        {props.dimension}
                    </p>
                </span>
                <span className='text-bar'>Quantity of residents: <br />
                <input
                    style={{ textAlign: 'center', width: '70px', height: '30px', border: 'none', borderRadius: '5px', fontWeight: 'bolder', fontSize: '20px', backgroundColor: 'yellow', marginTop: '10px' }}
                    type="text"
                    defaultValue={props.residents?.length}
                    id={props.residents?.length} />
                    </span>
            </div>
        </div>
    );
};

export default DataRmorty;