import {createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

interface User {
    id: string;
    id_company: string;
    user: string;
    name: string;
    email: string;
    role: 'ADMIN' | 'AGENT';
}

interface AutState {
    isAuthenticated: boolean;
    user: User | null;
}

const initialState: AutState = {
    isAuthenticated: false,
    user: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess(state, action: PayloadAction<User>){
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout(state){
            state.isAuthenticated = false;
            state.user = null;
        }
    }
})

export const {loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;