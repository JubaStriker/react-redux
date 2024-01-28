import { useEffect } from 'react';
import '../App.css'
import { motion, useAnimationControls } from 'framer-motion';

const parent = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
}

// const child = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: { opacity: 1, scale: 1 }
// }


const Animation = () => {

    const controls = useAnimationControls()

    // const handleForward = () => {
    //     controls.start({ x: 200 })
    // }
    // const handleBackward = () => {
    //     controls.start({ y: 200 })
    // }

    useEffect(() => {
        controls.start((i) => ({ x: 200, transition: { delay: i * 1 } }));
    }, [])
    return (
        <div className='flex justify-center items-center h-screen flex-col gap-3'>
            {/* <motion.button
                onClick={handleForward}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1 }}
                className='btn btn-primary'>Forward</motion.button> */}
            <motion.div
                className='size-44 bg-indigo-500 rounded-lg flex flex-wrap justify-center items-center gap-3 p-5'
                // variants={parent}
                // initial="hidden"
                animate={controls}
                // animate="visible"
                transition={{ ease: 'easeInOut', duration: 0.25, staggerChildren: 0.5, delayChildren: 0.5 }}
                // whileHover={{ scale: 1.1 }}
                // whileTap={{ scale: 1 }}
                // drag
                custom={1}
            >


                {/* <motion.div
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
                    className='bg-sky-300 rounded-lg size-20' ></motion.div> */}

            </motion.div>
            <motion.div
                animate={controls}
                className='size-44 bg-indigo-500 rounded-lg'
                custom={2}>
            </motion.div>
            <motion.div
                animate={controls}
                className='size-44 bg-indigo-500 rounded-lg'
                custom={3}>
            </motion.div>
            <motion.div
                animate={controls}
                className='size-44 bg-indigo-500 rounded-lg'
                custom={4}>
            </motion.div>


        </div>
    );
};

export default Animation;