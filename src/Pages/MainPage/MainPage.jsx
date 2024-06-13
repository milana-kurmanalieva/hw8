import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const MainPage = () => {

    const {count} = useSelector(state => state)
    const dispatch = useDispatch()
    console.log(count);

    const increment = (number) => {
        dispatch({
            type: 'INCREMENT',
            payload: number
        })
    }
    const decrement = (number) => {
        dispatch({
            type: 'DECREMENT',
            payload: number
        })
    }
    const reset = () => {
        dispatch({
            type: 'RESET'
        })
    }


  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => increment(10)}>+10</button>
        <button onClick={() => decrement(1)}>-1</button>
        <button onClick={() => increment(1)}>+1</button>
        <button onClick={() => decrement(10)}>-10</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default MainPage