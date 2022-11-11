
import {INCREMENT, DECREMENT, INCREMENT_BY_NUM, RESET} from '../actions/types'
const reducers = (state, action) => {

    if(state == undefined){
        state = {
            count: 23
                                
        }
    }
    

    switch (action.type) {
        case INCREMENT:
            return {
                ...state, 
                count: state.count + 1
            }

        case DECREMENT:
            return {
                ...state, 
                count: state.count - 1
        }

        case INCREMENT_BY_NUM:
            return {
                ...state, 
                count: state.count + action.data
        }

        case RESET:
            return {
                ...state, 
                count: 0
        }

    
        default:
            return state;
    }
}

export default reducers