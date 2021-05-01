import React from 'react';
import './container.css';
import Card from '../card/Card';

const Container = (props)=>{
    const resultJsx = (props.result || []).map((cur,ind)=>{
        return <Card cur={cur} key={ind}/>
    });

    return (
        <div className="container">
            {
                (resultJsx.length === 0? (<p>Search Anime and press <b>Go</b> to load stuff .. !</p>) : resultJsx)
            }
        </div>
    );
}

export default Container;