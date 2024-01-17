import { useRef } from "react";
import cn from "../../utils/cn";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const handleOutsideClose = (e) => {
        if (!containerRef.current?.contains(e.target)) {
            onClose();
        }
    }
    return createPortal(
        <div
            onClick={handleOutsideClose}
            className={cn("flex justify-center items-center fixed inset-0 bg-gray-500/70 invisible", { visible: isOpen })}>
            <div ref={containerRef} className="bg-white w-full max-w-sm rounded-md">{children}</div>
        </div>, document.getElementById("portal") as Element);
};

export default Modal;