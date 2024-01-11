import { useEffect, useState } from "react";
import Button from "./Button";

const UseEffectExample = () => {
    const [hidden, setHidden] = useState(false);
    const Count = () => {
        const [count, setCount] = useState(0)
        useEffect(() => {
            const intervalId = setInterval(() => {
                console.log("render");
                setCount((prev) => prev + 1);
            }, 1000)

            return () => {
                clearInterval(intervalId);
            }
        }, []);
        return <h1>{count}</h1>
    }
    return (
        <div className="mx-auto w-56">
            {!hidden && <Count />}
            <span onClick={() => setHidden((prev) => !prev)}>
                <Button title="Hide" />
            </span>
        </div>
    );
};

export default UseEffectExample;