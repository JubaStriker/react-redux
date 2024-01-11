import { useReducer } from 'react'
import Button from './Button'

type TAction = {
  type: string;
  payload?: number;
}

const initialState = { count: 0 }

const reducer = (currentState: typeof initialState, action: TAction) => {
  switch (action.type) {
    case "increment":
      return { count: currentState.count + 1 }

    case "decrement":
      return { count: currentState.count - 1 }

    case "incrementBySetAmount":
      return { count: currentState.count + action?.payload }

    default:
      return currentState;
  }

}

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>{state.count}</h1>
      <button className='btn mr-3' onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <span className='ml-3' onClick={() => dispatch({ type: 'incrementBySetAmount', payload: 3 })}>
        <Button title='Increment by 3' />
      </span>
    </div>
  );
};

export default UseReducerExample;