import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    logged: false,
    name: '',
    id: '',
    cep:''
}

const userReducer = createSlice({
    name: 'userReducer',
    initialState: initialState,
    reducers:{
        userLogin:(state)=>{
            state.logged = true
        }
    }
})

export const {userLogin} = userReducer.actions
export default userReducer.reducer