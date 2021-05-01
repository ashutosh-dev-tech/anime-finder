import React, {useState, useRef} from 'react';
import Container from '../container/Container';
import Load from '../load/Load';
import './search.css';

//API function
const getResults = async (query) =>{
    let apiRequest = `https://api.jikan.moe/v3/search/anime?q=${query}`;
    const res = await fetch(apiRequest);
    if(!res.ok){
        return [];
    }
    const jsonRes = await res.json();
    return jsonRes.results;
}

const Search = (props) =>{
    const inputBoxRef = useRef();
    
    const [result, setResult] = useState([]);

    const [displayCount, setDisplayCount] = useState(0);

    const GoBtnHandler = async ()=>{
        const finalRes = await getResults(inputBoxRef.current.value);
        setResult(finalRes);
        setDisplayCount(Math.min(11, finalRes.length));
    }

    const loadMoreHandler = ()=>{
        let curDisCount = displayCount;
        curDisCount=Math.min(curDisCount+11, result.length);
        setDisplayCount(curDisCount);
    }

    return (
    <>
        <div className='box'>
            <input placeholder="anime name" required ref={inputBoxRef}></input>
            <button className='go' onClick={GoBtnHandler}>
                Go
            </button>
        </div>
        <Container result={result.slice(0, displayCount)}/>
        {(displayCount!==result.length && <Load loadMoreHandler={loadMoreHandler}/>)}
    </>
    );
}

export default Search;