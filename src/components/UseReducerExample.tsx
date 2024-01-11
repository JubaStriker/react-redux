import { useReducer } from 'react'

const initialState = { count: 0 }

const reducer = (currentState: { count: number }, action: { type: unknown }) => {
  switch (action.type) {
    case "increment":
      return { count: currentState.count + 1 }

    case "decrement":
      return { count: currentState.count - 1 }

    default:
      return currentState;
  }

}

const UseReducerExample = () => {

  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)

  return (
    <div>
      <h1>{state.count}</h1>
      <button className='btn mr-3' onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};

export default UseReducerExample;