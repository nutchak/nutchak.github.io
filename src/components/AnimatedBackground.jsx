import React from 'react';
import { motion, circOut } from 'framer-motion';
import { useBackgroundColor } from '../contexts/BackgroundColorContext';

function AnimatedBackground({ children, className, initial, animate, exit }) {
    const { setBgColor } = useBackgroundColor();

    const handleAnimationComplete = () => {
        const classes = className.split(' ');
        const bgColorClass = classes.find(cls => cls.startsWith('bg-'));
        
        if (bgColorClass) {
            setBgColor(bgColorClass);
        }
    };


    return (
        <motion.div
            initial={initial}
            animate={animate}
            exit={exit}
            transition={{ duration: 1, ease: circOut }}
            onAnimationComplete={handleAnimationComplete}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default AnimatedBackground;
