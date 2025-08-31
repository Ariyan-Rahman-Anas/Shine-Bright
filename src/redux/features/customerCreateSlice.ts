import { createSlice } from "@reduxjs/toolkit";

interface CustomerCreateState{
    clientId:string,
}

const initialState:CustomerCreateState={
    clientId:"",
}

const customerCreateSlice=createSlice({
    name:"customerCreate",
    initialState,
    reducers:{
        setCustomer:(state, action)=>{
            state.clientId = action.payload.clientId
        }
    }
})

export const {setCustomer} = customerCreateSlice.actions
export default customerCreateSlice.reducer