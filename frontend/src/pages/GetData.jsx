import React, { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectData } from '../redux/dataSlice';
import { useGetHook } from '../hooks/hooks';
import { motion } from 'motion/react';
import LoadingSpinner from '../components/navbar/LoadingSpinner';
import { CircleCheck, CircleX } from 'lucide-react';
import GetAllTenants from '../components/navbar/records/GetAllTenants';
import GetOneTenant from '../components/navbar/records/GetOneTenant';

function GetData() {

      return (
        <motion.div
        initial={{ y:-20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease:'easeInOut' }}    
        className="p-6 flex flex-col justify-center gap-15">

          <GetAllTenants />
          <GetOneTenant />

        </motion.div>
      );
    
}

export default GetData