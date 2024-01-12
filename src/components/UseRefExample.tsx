import { FormEvent, useEffect, useRef } from "react";
import CustomInput from "./CustomInput";
const UseRefExample = () => {
    const myRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        myRef.current?.focus();
    }, []);


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CustomInput ref={myRef} />
            </form>
        </div>
    );
};

export default UseRefExample;