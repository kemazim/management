import React from 'react'
import { motion } from 'motion/react'
import { Coffee, Gauge } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='w-full flex justify-center py-7 bg-emerald-800/40 tracking-widest text-2xl font-bold'>
            <p>Welcome to the Management System</p>
        </div>
        <div className='flex justify-center items-center w-full'>
          <div className='w-1/3 flex flex-col justify-center items-center p-16 border-r-2 border-r-emerald-800/50'>
            <p className='text-xl font-semibold mb-6'>Fast and Easy</p>
            <motion.div 
            animate={{ 
              x: [-3, 5, -1, 2, 0] 
            }}
            transition={{ 
              duration: 0.3, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
            >
              <Gauge className="w-20 h-20" />
            </motion.div>
          </div>
          <div className='w-1/3 flex flex-col justify-center items-center p-16 
          border-r-2 border-r-emerald-800/50'>
            <p className='text-xl font-semibold mb-6'>Robust System</p>
            <motion.div 
            animate={{ 
              y: [-5, 5, -5], 
              opacity: [0.6, 1, 0.6] 
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Coffee className="w-20 h-20" />
            </motion.div>
          </div>
          <div className='w-1/3 flex flex-col justify-center items-center'>
          <motion.button
          whileTap={{
            scale: 0.9, 
            transition: {duration: 1}
          }}
          whileHover={{
            scale: [1, 1.01, 1],
            color: ["#000000", "#009900", "#000000"],
            transition: {
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut",
            },
          }}
          onClick={() => navigate("/create")}
           className='border-3 p-5 rounded-full cursor-pointer font-bold'>
            Create Your Record Now!
          </motion.button>
          </div>
        </div>
    </div>
  )
}

export default Welcome