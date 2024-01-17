import { MouseEvent, ReactNode, createContext, useContext, useRef } from "react";
import cn from "../../utils/cn";
import { createPortal } from "react-dom";

type TModal = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}
type TModalContext = {
    onClose: () => void;
}
type TModalHeader = {
    children: ReactNode;
}


const ModalContext = createContext<TModalContext | null>(null)

const Modal = ({ isOpen, onClose, children }: TModal) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const handleOutsideClose = (e: MouseEvent) => {
        if (!containerRef.current?.contains(e.target as Node)) {
            onClose();
        }
    }
    return createPortal(
        <ModalContext.Provider value={{ onClose }}>
            <div
                onClick={handleOutsideClose}
                className={cn("flex justify-center items-center fixed inset-0 bg-gray-500/70 invisible px-4 py-2", { visible: isOpen })}>
                <div ref={containerRef} className="bg-white w-full max-w-sm rounded-md p-4">
                    <Modal.Header>
                        <h3>Modal Header</h3>
                        <CloseButton />
                    </Modal.Header>
                    {children}
                </div>
            </div>
        </ModalContext.Provider>
        , document.getElementById("portal") as Element);
};

const CloseButton = () => {
    const { onClose } = useContext(ModalContext) as TModalContext;
    return <p className="ml-auto" onClick={onClose}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 bg-red-500 rounded-md text-white p-0.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
    </p>
}


const Header = ({ children }: TModalHeader) => {
    return <div className="flex justify-between items-center w-full mb-3">{children}</div>
}

Modal.CloseButton = CloseButton;
Modal.Header = Header;

export default Modal;