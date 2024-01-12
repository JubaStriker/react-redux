import { forwardRef } from "react";

const CustomInput = forwardRef((props, myRef) => {
        return (
                <input
                        ref={myRef}
                        type="text"
                        name="name"
                        id="name"
                        className="border border-red-500"
                />
        );
})

export default CustomInput;