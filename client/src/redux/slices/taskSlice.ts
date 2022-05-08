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

export interface taskState {
    tasks: itemInterface[],
    statuses: statusInterface[],
    isFetching: boolean
}

const data: itemInterface[] = [
    {
        id: 1,
        statusId: 1,
        type: "Bug Fix",
        content: "Fill out human interest distribution form",
        userId: 1
    },
    {
        id: 2,
        statusId: 1,
        type: "Bug Fix",
        content: "Get an anniversary gift",
        userId: 1
    },
    {
        id: 3,
        type: "Bug Fix",
        statusId: 1,
        content: "Call the bank to talk about investments",
        userId: 1
    },
    {
        id: 4,
        statusId: 1,
        type: "Bug Fix",
        content: "Finish reading Intro to UI/UX",
        userId: 1
    }
];

export const statuses: statusInterface[] = [
    {
        id: 1,
        name: "open",
    },
    {
        id: 2,
        name: "in progress",
    },
    {
        id: 4,
        name: "in review",

    },
    {
        id: 4,
        name: "done",
    }
];


export const getTasks = createAsyncThunk<
    { items: itemInterface[], statuses: statusInterface[] },
    number,
    { rejectValue: void }
>(
    'api/projects',
    async (id, { rejectWithValue }) => {
        try {
            // const { data } = await axios.get(`${API_URL}/api/tasks/${id}`);
            return { items: data, statuses: statuses }

        } catch (err: any) {
            return rejectWithValue(err.response.data)
        }
    }

)



const initialState: taskState = {
    tasks: [],
    statuses: [],
    isFetching: true

}


export const taskSlice = createSlice({
    name: 'taskReducer',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getTasks.pending, state => {
            state.isFetching = true
        })
        builder.addCase(getTasks.fulfilled, (state, action) => {
            state.tasks = action.payload.items
            state.statuses = action.payload.statuses
            state.isFetching = false

        })
        builder.addCase(getTasks.rejected, (state, action) => {

        })
    }

})



//export const { create, update, deleteP } = projectSlice.actions

export default taskSlice.reducer