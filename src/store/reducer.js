import actionTypes from './actions';

const initialSate = {
    result: [],
    displayCount: 0
};
const reducer = (prevState = initialSate, action) => {
    
    switch(action.type){
        case actionTypes.SET_DISPLAYCOUNT: {
            return {
                ...prevState,
                displayCount: action.displayCount
            }
        }
        case actionTypes.SET_RESULT: {
            return {
                ...prevState,
                result: [...action.result]
            }
        }
        default: {
            return prevState;
        }
    }
}

export default reducer;

