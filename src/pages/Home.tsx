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
                    <h4>Modal Container</h4>
                </Modal>
            </div>
        </div>
    );
};

export default Home;