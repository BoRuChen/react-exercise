import { ActionTypes } from "../actionTypes/actionTypes"
import { Dispatch } from "redux"

export const addNum = (num:string) => {
    return(dispatch:Dispatch) => {
        dispatch({
            type: ActionTypes.ADD_NUM,
            payload:num
        })
    }
}

export const clearNum = () => {
    return(dispatch : Dispatch) => {
        dispatch({
            type:ActionTypes.CLEAN_NUM,
        })
    }
}