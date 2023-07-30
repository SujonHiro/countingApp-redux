import { createSlice } from "@reduxjs/toolkit";

export const counterSlice=createSlice({
        name:'counter',
        initialState:{
            countingValue:10
        },
        reducers:{
            increment:(state)=>{
                state.countingValue=state.countingValue+1
            },
            decrement:(state)=>{
                state.countingValue=state.countingValue-1
            },
            setCustom:(state,action)=>{
                state.countingValue=action.payload
            }
            
        }
})

export const {increment,decrement,setCustom}=counterSlice.actions;
export default counterSlice.reducer;