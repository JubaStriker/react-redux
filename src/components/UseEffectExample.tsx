import { useEffect, useState } from "react";
import Button from "./Button";

const UseEffectExample = () => {
    const [hidden, setHidden] = useState(false);
    // const Count = () => {
    //     const [count, setCount] = useState(0)
    //     useEffect(() => {
    //         const intervalId = setInterval(() => {
    //             setCount((prev) => prev + 1);
    //         }, 1000)

    //         return () => {
    //             clearInterval(intervalId);
    //         }
    //     }, []);
    //     return <h1 className="text-center">{count}</h1>
    // }

    const Todo = () => {
        const controller = new AbortController();
        const signal = controller.signal;
        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/todos/1', { signal })
                .then(res => res.json())
                .then(data => { console.log(data) });

            // return () => {
            //     controller.abort();
            // }
        }, [])
        return <h1>Todo</h1>
    };
    return (
        <div className="flex justify-center my-4">
            <div>
                {!hidden && <Todo />}
                <span onClick={() => setHidden((prev) => !prev)}>
                    <Button title="Hide" />
                </span>
            </div>
        </div>
    );
};

export default UseEffectExample;