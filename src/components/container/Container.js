import React from 'react';
import './container.css';
import Card from '../card/Card';

const Container = (props)=>{
    console.log("=========>",props);
    return (
        <div className="container">
            {
                (props.result || []).map((cur,ind)=>{
                    return <Card cur={cur} key={ind}/>
                })
            }
        </div>
    );
}

export default Container;