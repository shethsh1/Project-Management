import { createSlice, PayloadAction, createAsyncThunk, current } from "@reduxjs/toolkit"
import { Dispatch } from 'redux';
import axios from "axios"
const API_URL = process.env.REACT_APP_API_HOST_URL || ""


export interface itemInterface {
    id: number,
    statusId: number,
    type: "Bug Fix" | "Feature" | "Prototype" | "Documentation" | "Other",
    content: string,
    userId: number,

}

export interface statusInterface {
    id: number,
    name: "open" | "in progress" | "in review" | "done"

}

export interface initialState {
    tasks: itemInterface[],
    statuses: statusInterface[]
}

const initialState = {
    tasks: [],
    statuses: [],
    isFetching: true
}


export const taskSlice = createSlice({
    name: 'taskReducer',
    initialState,
    reducers: {

    },

})



//export const { create, update, deleteP } = projectSlice.actions

export default taskSlice.reducer