import React, { useState } from 'react';
import { ChevronDown, ChevronUp, FolderKanban, Menu, Trees, X } from 'lucide-react';
import { motion } from "motion/react"
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCat, setIsCat] = useState(false);

  return (
    <nav className="bg-white shadow shadow-emerald-800 sticky top-0 z-50">
      <motion.div
        initial={{ maxHeight: 56}}
        animate={{ maxHeight: isOpen ? 500 : 56 }}
        transition={{ duration: 0.65, ease: "linear", type: "easeInOut" }}
       className="max-w-full px-4 py-2">
        {/* Content */}
        <div className="flex justify-between md:justify-start items-center">
          {/* Logo */}
          <motion.button
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          whileTap={{ scale: 0.95 }}
          whileHover={{ boxShadow: "0px 4px 10px rgba(0,0,0,0.2)" }}           className="flex-shrink-0 flex items-center gap-1 cursor-pointer rounded-xl p-1 mr-5"
           >
          <FolderKanban className='text-emerald-800 w-7 h-7'/>
            <span className="text-2xl font-bold">Management</span>
          </motion.button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-1 relative">
            {/* contacts */}
            <motion.button
            whileHover={{ boxShadow: "0px 4px 10px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
                className="text-gray-600 hover:text-gray-900 px-1 py-1.5  font-medium flex gap-2 items-center max-w-3xl rounded-xl cursor-pointer text-md mr-2"
              >
                {/* TODO: assign correct href */}
                <Link to="/">
                    Records
                </Link>
            </motion.button>

            <motion.button
            whileHover={{ boxShadow: "0px 4px 10px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
                className="text-gray-600 hover:text-gray-900 px-1 py-1.5  font-medium flex gap-2 items-center max-w-3xl rounded-xl cursor-pointer text-md"
              >
                {/* TODO: assign correct href */}
                <Link to="/">
                    Create
                </Link>
            </motion.button>


          </div>

          </div>

      </motion.div>
    </nav>
  );
};

export default Nav;