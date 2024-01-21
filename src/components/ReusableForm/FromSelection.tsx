import { useContext } from "react";
import { FormElementContext } from ".";

export const FromSelection = () => {
    const { double } = useContext(FormElementContext);

    return (
        <div>
            This is form section
        </div>
    );
};

