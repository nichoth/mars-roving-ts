import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface counterState {
    value: number;
}

const initialState: counterState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value++
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        amountAdded (state, action: PayloadAction<number>) {
            state.value += action.payload
        }
    },
})
  
// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,
    amountAdded } = counterSlice.actions

export default counterSlice.reducer
