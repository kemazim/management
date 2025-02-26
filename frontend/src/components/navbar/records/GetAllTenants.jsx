import React, { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux';
import { motion } from 'motion/react';
import { useDeleteHook, useGetHook } from '../../../hooks/hooks';
import { selectData } from '../../../redux/dataSlice';
import LoadingSpinner from '../LoadingSpinner';

function GetAllTenants() {
    const rawTenants = useSelector(selectData)
    const tenants = useMemo(() => rawTenants, [rawTenants]);
    const {deleteHook, deleteLoading} = useDeleteHook()
    const [refresh, setRefresh] = useState(false)

    const { getHook, loading } = useGetHook();
      useEffect(()=>{
        getHook();
      },[refresh])
    
      const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-MY');
      };

      const handleDelete = (tenant) => {
        deleteHook(tenant)
        setRefresh((prev) => !prev);      
    }
      
      if(loading || deleteLoading) return <LoadingSpinner />

  return (
    <div>
        { tenants.length === 0 && <p>unable to fetch data</p>}
        {tenants.length > 0 && 
        <p className="text-2xl font-bold mb-4">Tenants</p>
        }
          {tenants.length > 0 && 
          <div className="overflow-x-auto rounded-lg shadow">
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
                  {/* <th className="py-3 px-4 text-left text-sm font-semibold">Is Active</th> */}
                  <th className="py-3 px-4 text-left text-sm font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {tenants.map((tenant, index) => (
                  <tr key={tenant.unitNo} className="hover:bg-gray-50">
                    <td className="py-3 px-4">{tenant.unitNo}</td>
                    <td className="py-3 px-4">
                      <div className="font-medium">{tenant.tenantName}</div>
                      <div className="text-gray-500 text-xs">{tenant.email}</div>
                    </td>
                    <td className="py-3 px-4">{tenant.companyName}</td>
                    <td className="py-3 px-4">RM {tenant.rentalRate.toFixed(2)}</td>
                    <td className="py-3 px-4">
                      <span className={tenant.amountDue > 0 ? "text-red-600 font-medium" : "text-green-600"}>
                        RM {tenant.amountDue.toFixed(2)}
                      </span>
                    </td>
                    <td className="py-3 px-4">{formatDate(tenant.rentalDate)}</td>
                    <td className="py-3 px-4">{tenant.contactNo}</td>
                    {/* <td className="py-3 px-4">
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        whileHover={{opacity: 0.8, scale: 1.1}}
                        onClick={() => handleToggleActive(index)}
                        className={`text-center flex justify-center items-center h-6 w-6 rounded-full text-xs font-medium ${
                          tenant.isActive 
                            ? " text-green-800" 
                            : " text-red-800"
                        }`}
                      >
                        {tenant.isActive ? <CircleCheck /> : <CircleX />}
                      </motion.button>
                    </td> */}
                    <td className="py-3 px-4">
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        whileHover={{opacity: 0.8, scale: 1.1}}
                        onClick={() => handleDelete(tenant)}
                        className="bg-red-500 hover:bg-blue-600 text-white py-1 px-3 rounded text-xs font-bold tracking-widest"
                      >
                        DELETE
                      </motion.button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>}
    </div>
  )
}

export default GetAllTenants