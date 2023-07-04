import {legacy_createStore} from "redux";

const initialState = {
    loadingState: false,
    content: "",
    err: "",
    analysis: ""
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'SHOW_LOADING':
            return {loadingState: true};
        case 'HIDE_LOADING':
            return {loadingState: false};
        case 'SET_CONTENT':
            return {content: action.content, ...state};
        case 'SET_ANALYSIS':
            return {analysis: action.analysis, ...state};
        case 'SET_ERR':
            return {err: action.err, ...state};
        default:
            return state;
    }
}

export default legacy_createStore(rootReducer);