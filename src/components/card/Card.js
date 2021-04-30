import React from 'react';
import './card.css';

const getFootTitle = (str ) => {
    if(str.length<11)
        return str;
    return str.substring(0,11)+"...";
}
const Card = (props) => {
    console.log(props.cur.title);
    const targetLoc = `location.href='${props.cur.url}';`;
    console.log('targetLoc', targetLoc);
    return (
        <div className="card" onClick={()=>{
            window.open(props.cur.url, '_blank').focus();
        }}>
            <img src={props.cur.image_url} alt="Avatar"></img>
            <div className="desc">
                <h4><b>{getFootTitle(props.cur.title)}</b></h4> 
            </div>
        </div>
    );
}

export default Card;