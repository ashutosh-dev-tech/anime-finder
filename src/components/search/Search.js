import React, {useEffect, useState, useRef} from 'react';
import Container from '../container/Container';
import './search.css';

//API function
const getResults = async (query) =>{
    let apiRequest = `https://api.jikan.moe/v3/search/anime?q=${query}`;
    const res = await fetch(apiRequest)
    const jsonRes = await res.json();
    return jsonRes.results;
}

const Search = (props) =>{
    const inputBoxRef = useRef();
    
    const [result, setResult] = useState([]);

    const GoBtnHandler = async (search)=>{
        const finalRes = await getResults(inputBoxRef.current.value)
        setResult(finalRes);
    }

    
    useEffect(()=>{

    }, [result]);

    return (
    <>
        <div className='box'>
            <input placeholder="anime name" required ref={inputBoxRef}></input>
            <button className='go' onClick={GoBtnHandler}>
                Go
            </button>
        </div>
        <Container result={result}/>
    </>
    );
}

export default Search;