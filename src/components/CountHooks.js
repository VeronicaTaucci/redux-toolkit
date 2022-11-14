import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
// import {increment, decrement, incrementByNum, reset} from '../actions/incrementCount'
import {counterActions} from './counterSlice';

const CountHooks = () => {

  const count = useSelector(state => state.count) // count is mapped from global state
  const dispatch = useDispatch()   //store.dispatch(fun)

  return (
    <>

      <h2>{count}</h2>

      <button onClick={()=>dispatch(counterActions.increment())}>Increment</button>
      <button onClick={()=>dispatch(counterActions.decrement())}>Decrement</button>

      <button onClick={()=>dispatch(counterActions.incrementByNum(5))}>Increase by 5</button>
      <button onClick={()=>dispatch(counterActions.reset())}>Reset</button>



    </>
  )
}

export default CountHooks
