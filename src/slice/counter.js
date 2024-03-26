import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE ={
    count : 0,
    cart_items : []
}

const counterSlice = createSlice ({
    name : "counter",
    initialState : INITIAL_STATE ,
    reducers : {
        increaseCounter : (state)=>{
            state.count = state.count +1
        },
        decreaseCounter : (state)=>{
            state.count = state.count -1
        },
        increaseCard: (state, action) => {
            state.cart_items.push(action.payload)
          },
        resetCount: (state) => {
            state.count = 0;
        },    
    }
})

export const {
    increaseCounter,
    decreaseCounter,
    resetCount,
    increaseCard
} = counterSlice.actions;

export default counterSlice.reducer;