import { ActionTypes } from "../actionTypes/actionTypes"

const initState:string[] = []

interface Action {
    type : string,
    payload? : any
}

export const guessReducer = (state = initState,action:Action) => {
    switch(action.type){
        case ActionTypes.ADD_NUM:
            return [...state,action.payload]
        case ActionTypes.CLEAN_NUM:
            return initState
        default:
            return state
    }
}