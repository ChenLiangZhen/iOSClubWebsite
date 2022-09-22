import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IProductDataList, IProductItem} from "../screen/MainScreen";

export const initialState = {

    testString: "",

    userInfo: {
        email: "",
        password: "",
        accountName: ""
    },
}

const dataSlice = createSlice({

    name: 'data',
    initialState,
    reducers: {
        increaseValue: (state, action) => {
            state.testString = "STRING!"
        },

        decreaseValue: (state, action) => {
            state.testString = "STRING..."
        },
    },
})

export const selectAccount = state => state.account
export const { setTestString } = dataSlice.actions
export default dataSlice.reducer
