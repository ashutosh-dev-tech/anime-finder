import React from 'react';
import "./load.css";

const Load = (props) => {
    return (
        <div className="load" 
        onClick={props.loadMoreHandler}>
            load More ...
        </div>
    )
}

export default Load;