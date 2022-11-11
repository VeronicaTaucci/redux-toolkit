
import {INCREMENT, DECREMENT, INCREMENT_BY_NUM, RESET,
    LOAD_API_DATA, LOAD_DATA} from './types'

// https://jsonplaceholder.typicode.com/comments

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    
    return {
        type: DECREMENT
    }
}

export const incrementByNum = (num) => {
    
    return {
        type: INCREMENT_BY_NUM, 
        data: num
    }
}

export const reset = () => {
    
    return {
        type: RESET
    }
}



