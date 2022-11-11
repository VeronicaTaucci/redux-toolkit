
import {INCREMENT, DECREMENT, INCREMENT_BY_NUM, RESET} from './types'
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



