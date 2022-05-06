import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Dispatch } from 'redux';
import axios from "axios"
const API_URL = process.env.REACT_APP_API_HOST_URL || ""

export type projectObj = {
    createdBy: number,
    title: string,
    description: string,
    endDate: string,
    priority: 'Critical' | 'High' | 'Medium' | 'Low',
    status: 'Not Active' | 'In Progress' | 'Completed',
    progress: number,
    favorite: boolean


}

const initialState = {}

export const projectSlice = createSlice({
    name: 'projectReducer',
    initialState,
    reducers: {}
})

// CREATE PROJECT

export const createProject = (projectObj : projectObj) => async (dispatch : Dispatch) => {
    try {

        console.log(API_URL)
        await axios.post(`${API_URL}/api/projects`, projectObj)
        console.log("reached")
    } catch (err) {
        return console.log(err)
    }
}

export default projectSlice.reducer