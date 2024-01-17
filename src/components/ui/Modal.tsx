import cn from "../../utils/cn";

const Modal = ({ isOpen, onClose }) => {
    return (
        <>
            <div className={cn("fixed inset-0 bg-gray-500/70 invisible", { visible: isOpen })}>
                <h1>This ia modal</h1>
            </div>

        </>
    );
};

export default Modal;