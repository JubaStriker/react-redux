import '../App.css'
import { motion } from 'framer-motion';

const parent = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
}

const child = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
}
const Animation = () => {
    return (
        <div>
            <motion.div
                className='size-64 bg-indigo-500 rounded-lg flex flex-wrap justify-center items-center gap-3 p-5'
                variants={parent}
                initial="hidden"
                animate="visible"
                transition={{ ease: 'easeInOut', duration: 1.5, staggerChildren: 0.5, delayChildren: 0.5 }}
            >
                <motion.div
                    variants={child}
                    className='bg-sky-300 rounded-lg size-20' ></motion.div>
                <motion.div
                    variants={child}
                    className='bg-sky-300 rounded-lg size-20' ></motion.div>
                <motion.div
                    variants={child}
                    className='bg-sky-300 rounded-lg size-20' ></motion.div>
                <motion.div
                    variants={child}
                    className='bg-sky-300 rounded-lg size-20' ></motion.div>

            </motion.div>
        </div>
    );
};

export default Animation;