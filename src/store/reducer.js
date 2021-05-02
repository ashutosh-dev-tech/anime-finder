const initialSate = {
    result: [],
    displayCount: 0
};
const reducer = (prevState = initialSate, action) => {
    
    switch(action.type){
        case 'setDisplayCount':{
            return {
                ...prevState,
                displayCount: action.displayCount
            }
        }
        case 'setResult':{
            return {
                ...prevState,
                result: [...action.result]
            }
        }
        default:{
            return prevState;
        }
    }
}

export default reducer;

