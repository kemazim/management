import React, { useState } from 'react'
import { motion } from 'motion/react';
import { Search } from 'lucide-react';
import { useSelector } from 'react-redux';
import { selectOneTenantData } from '../../../redux/dataSlice';
import { useGetOneTenantHook } from '../../../hooks/hooks';
import LoadingSpinner from '../LoadingSpinner';

function GetOneTenant() {
    const[unitNo, setUnitNo] = useState()
    const tenant = useSelector(selectOneTenantData)
    const{ getOneTenantHook, oneloading } = useGetOneTenantHook()

    const handleSubmit = (e) =>{
    e.preventDefault();
    getOneTenantHook(unitNo);
    setUnitNo('');
    }  

    const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-MY');
    };

  if(oneloading) return <LoadingSpinner />

  return (
    <div className='flex flex-col gap-5'>
        <p className="text-2xl font-bold">Search Tenant by Unit</p>
        <form 
        onSubmit={handleSubmit}
        className='flex justify-start'>
            <motion.div 
            className='bg-blue-800/40 flex gap-2 py-2 px-4 rounded-lg'>
                <input
                type='text'
                className='focus:outline-none'
                placeholder='Search Unit'
                value={unitNo}
                onChange={()=> setUnitNo(e.target.value)}
                />
                <motion.button
                whileTap={{scale: 0.9}}
                type='submit'
                className='flex items-center gap-2 px-3 py-2 font-semibold'
                >
                <Search />
                Search
                </motion.button>
            </motion.div>
        </form>
        <div className="overflow-x-auto rounded-lg shadow">
            {tenant && 
            <table className="min-w-full bg-white">
              <thead className="bg-blue-800/40 border-b">
                <tr>
                  <th className="py-3 px-4 text-left text-sm font-semibold">Unit No</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold">Tenant</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold">Company</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold">Rental Rate</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold">Amount Due</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold">Rental Date</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold">Contact No</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4">
                        {tenant.unitNo}
                    </td>
                    <td className="py-3 px-4">
                        <div className="font-medium">
                        {tenant.tenantName}
                        </div>
                        <div className="text-gray-500 text-xs">
                        {tenant.email}
                        </div>
                    </td>
                    <td className="py-3 px-4">
                        {tenant.companyName}
                    </td>
                    <td className="py-3 px-4">
                        RM {tenant.rentalRate.toFixed(2)}
                    </td>
                    <td className="py-3 px-4">
                      <span className=
                      {tenant.amountDue > 0 ? "text-red-600 font-medium" : "text-green-600"}>
                        RM {tenant.amountDue.toFixed(2)}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                        {formatDate(tenant.rentalDate)}
                    </td>
                    <td className="py-3 px-4">
                        {tenant.contactNo}
                    </td>
                  </tr>
              </tbody>
            </table>}
          </div>
    </div>
  )
}

export default GetOneTenant