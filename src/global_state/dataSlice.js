import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export const initialState = {

    appState : {
        userLoggedIn: false
    },
    userInfo: {
        accountID: "",
        password: "",
        email: ""
    },
}

const dataSlice = createSlice({

    name: 'data',
    initialState,

    reducers: {

        changeLoginState: (state, action) => {
            state.appState.userLoggedIn = action.payload
        },
    },
})

export const selectData = (state) => state.data
export const { changeLoginState } = dataSlice.actions
export default dataSlice.reducer
