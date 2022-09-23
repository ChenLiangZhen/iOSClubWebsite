import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export const initialState = {

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

        setUserInfo: (state, action) => {
            state.userInfo = action.payload
        },
    },
})

export const selectData = (state) => state.data
export const { setUserInfo } = dataSlice.actions
export default dataSlice.reducer
