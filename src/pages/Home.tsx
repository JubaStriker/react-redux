import { useState } from "react";
import Modal from "../components/ui/Modal";

const Home = () => {

    const [modal, setModal] = useState(false);
    const handleModalClose = () => {
        setModal((prev) => !prev)
    };
    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <button onClick={() => setModal((prev) => !prev)} className="btn">Modal</button>
                <Modal isOpen={modal} onClose={handleModalClose}>
                    <h1>This is a modal</h1>
                </Modal>
            </div>
        </div>
    );
};

export default Home;