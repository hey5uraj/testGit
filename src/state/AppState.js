import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    name: "",
    email: "",
    token: "",
    // other states
}

export const AppSlice = createSlice({
    name: "AppData",
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.token = action.payload.token;
            state.name = action.payload.name;
            state.email = action.payload.email;
           
        },
        setLogout: (state) => {
            state.name = null;
            state.email = null;
            state.token = null;
           
           
        },
    //    other reducers
    
    }
})

export const { setLogout, setLogin} = AppSlice.actions;

export default AppSlice.reducer;