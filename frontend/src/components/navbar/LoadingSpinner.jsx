import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const LoadingSpinner = () => {
  
  return (
    <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-50">
        <div className='flex flex-col items-center justify-center gap-5 bg-blue-800/60 p-10 rounded-xl'>

            <motion.div
            animate={{ 
            rotate: 360
            }}
            transition={{ 
            duration: 1.5,
            ease: "linear",
            repeat: Infinity
            }}
            >
                <Loader2 size={48} color="#ffffff" />
            </motion.div>

            <p className='text-xl font-semibold text-white'>Loading</p>

        </div>

    </div>
  );
};

export default LoadingSpinner;