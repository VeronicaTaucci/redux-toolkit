
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count: 23
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        //no longer need the switch statements
        increment(state){  //if you don't have a payload then you don't need actions
            state.count++;
        },
        decrement(state){
            state.count--;
        },
        incrementByNum(state, action){
            //in RTK the payload is always going to be under 'payload'
            state.count = state.count + action.payload;
        },
        reset(state){
        state.count = 0;
        }
    }
})

// access to the actions by doing counterSlice.actions
// access to the reducers is by doing counterSlice.reducers

export const counterActions = counterSlice.actions; //exports actions

// counterActions.increment, counterActions.decrement, counterActions.incrementByNum

export default counterSlice.reducer; //exports reducer, this is what is passed into configureStore