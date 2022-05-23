import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk('getUsers', async () =>{
    try {
        const res = await axios.get("http://localhost:3001/users")
        return res.data
    } catch (error) {
        console.log(error)
    }
})
export const addUser = createAsyncThunk("postUser", async (user) => {
    try {
        const res = await axios.post("http://localhost:3001/addUser",user)
        return console.log(res.data)
    } catch (error) {
        console.log(error.message)
    }
})
export const removeUser = createAsyncThunk('removeUser',async (id) => {
    try {
        const res = await axios.delete(`http://localhost:3001/user/${id}`)
        return console.log(res.data)
    } catch (error) {
        console.log(error.message)
    }
})

const slice  = createSlice({
    name:"user",
    initialState:{
        users:[]
    },
    reducers:{
        changeName:(state, {payload})=>{
            return {...state.users, name:payload}
        },
        changeAge:(state, {payload})=>{
            return {...state.users, age:payload}
        }
    },
    extraReducers(builder){
        builder
            .addCase(getUsers.fulfilled, (state, action)=>{
                return {...state.users, users:action.payload}
            })
    }
})
export const {changeName, changeAge} = slice.actions
export default slice.reducer