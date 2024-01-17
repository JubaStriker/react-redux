import { useState } from "react";
import Modal from "../components/ui/Modal";
import Navbar from "../components/Navbar";

const Home = () => {

    const [modal, setModal] = useState(false);
    const handleModalClose = () => {
        setModal((prev) => !prev)
    };
    return (
        <div>
            <Navbar />
            <div className="flex justify-center items-center h-screen">
                <button onClick={() => setModal((prev) => !prev)} className="btn">Modal</button>
                <Modal isOpen={modal} onClose={handleModalClose} />
            </div>
        </div>
    );
};

export default Home;