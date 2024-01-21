import { createContext } from "react";
import cn from "../../utils/cn";

export const FormElementContext = createContext<{ double: boolean } | null>(null)

export const Form = ({ children, onSubmit, double }) => {
    return (
        < FormElementContext.Provider value={double} >
            <form onSubmit={onSubmit}
                className={cn('max-w-5xl flex flex-col justify-center mx-auto items-center h-screen',
                    {
                        'max-w-5xl': double,
                        'max-w-md': !double
                    })}>
                {children}
            </form>

        </FormElementContext.Provider>)

};

