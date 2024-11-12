import {applyMiddleware, createStore} from "redux";
import dataState from "./state/dataState.jsx";
import {thunk} from "redux-thunk";

function dataReducer(state = dataState, action){
    switch (action.type){
        case "changeData":
            setTimeout(()=>{
                state.data = action.payload;
            },1000)
            return {...state}
        case "resetData":
            setTimeout(()=>{
                state.data = [1];
            },1000)
            return {...state}
        default:
            return state;
    }
}

export default createStore(dataReducer, applyMiddleware(thunk));