import React from 'react';
import title from '../../assets/title.gif';

const ScreenMorty = () => {
    return (
        <div className='property-title'>
            <div className='triangle-1'></div>
            <img style= {{width: '650px', height:'160px'}}src={title}></img>
            <div className='triangle-2'></div>
        </div>
    );
};

export default ScreenMorty;