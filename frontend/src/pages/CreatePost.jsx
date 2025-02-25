import React, { useState } from 'react'
import { motion } from 'motion/react';
import { usePostHook } from '../hooks/hooks';
import toast from 'react-hot-toast';

function CreatePost() {
  const [details, setDetails] = useState({
    unitNo: '',
    rentalRate: 0,
    ICNo: '',
    tenantName: '',
    email: '',
    mailingAddress: '',
    companyName: '',
    contactNo: '',
    amountDue: 0,
    rentalDate: '',
})

const {postHook , loading} = usePostHook();


const handleSubmit = (e) => {
    e.preventDefault();
    if(!details.unitNo || !details.rentalRate || !details.ICNo || !details.tenantName || !details.email || !details.mailingAddress || !details.companyName || !details.contactNo || !details.amountDue) return toast.error("Fill in all inputs!",  {id: "createRecord", position: "bottom-center"})
    postHook(details);
}

  return (
    <motion.div 
    initial={{ y:-20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, ease:'easeInOut' }}
    className='flex flex-col gap-4 items-center justify-center h-[calc(100dvh-56px)]'>
        <p className='text-2xl tracking-wide font-semibold'>
          Create Record
        </p>
        
        <form 
        onSubmit={handleSubmit}
        className='flex flex-col gap-8 p-8 border-3 border-emerald-800/40 rounded-xl w-4/5 md:w-xl text-sm'>
          <div className='flex justify-between item gap-8'>

            <div className='flex flex-col gap-4'>
                <div className="flex flex-col">
                    <label className='mb-4 break-words'>
                    Unit No.
                    </label>
                <input 
                    type="text"
                    className='outline rounded p-2'
                    value={details.unitNo}
                    onChange={(e) => setDetails({...details, unitNo: e.target.value})}
                    placeholder='Enter Unit No. '
                />
                </div>
                <div className="flex flex-col">
                    <label className='mb-4 break-words'>
                    Rental Rate
                    </label>
                <input 
                    type="text"
                    className='outline rounded p-2'
                    value={details.rentalRate}
                    onChange={(e) => setDetails({...details, rentalRate: e.target.value})}
                    placeholder='Enter Rental Rate '
                />
                </div>
                <div className="flex flex-col">
                    <label className='mb-4 break-words'>
                    NRIC
                    </label>
                <input 
                    type="text"
                    className='outline rounded p-2'
                    value={details.ICNo}
                    onChange={(e) => setDetails({...details, ICNo: e.target.value})}
                    placeholder='Enter NRIC '
                />
                </div>
                <div className="flex flex-col">
                    <label className='mb-4 break-words'>
                    Tenant Name
                    </label>
                <input 
                    type="text"
                    className='outline rounded p-2'
                    value={details.tenantName}
                    onChange={(e) => setDetails({...details, tenantName: e.target.value})}
                    placeholder='Enter Tenant Name '
                />
                </div>
                <div className="flex flex-col">
                    <label className='mb-4 break-words'>
                    Email
                    </label>
                <input 
                    type="text"
                    className='outline rounded p-2'
                    value={details.email}
                    onChange={(e) => setDetails({...details, email: e.target.value})}
                    placeholder='Enter Email '
                />
                </div>

              </div>

              <div className='flex flex-col gap-4'>

                <div className="flex flex-col">
                    <label className='mb-4 break-words'>
                    Mailing Address
                    </label>
                <input 
                    type="text"
                    className='outline rounded p-2'
                    value={details.mailingAddress}
                    onChange={(e) => setDetails({...details, mailingAddress: e.target.value})}
                    placeholder='Enter Mailing Address '
                />
                </div>
                <div className="flex flex-col">
                    <label className='mb-4 break-words'>
                    Company Name
                    </label>
                <input 
                    type="text"
                    className='outline rounded p-2'
                    value={details.companyName}
                    onChange={(e) => setDetails({...details, companyName: e.target.value})}
                    placeholder='Enter Company Name '
                />
                </div>
                <div className="flex flex-col">
                    <label className='mb-4 break-words'>
                    Contact No.
                    </label>
                <input 
                    type="text"
                    className='outline rounded p-2'
                    value={details.contactNo}
                    onChange={(e) => setDetails({...details, contactNo: e.target.value})}
                    placeholder='Enter Contact No. '
                />
                </div>
                <div className="flex flex-col">
                    <label className='mb-4 break-words'>
                    Amount Due
                    </label>
                <input 
                    type="text"
                    className='outline rounded p-2'
                    value={details.amountDue}
                    onChange={(e) => setDetails({...details, amountDue: e.target.value})}
                    placeholder='Enter Amount Due '
                />
                </div>

              </div>

          </div>
            <motion.button 
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(16, 185, 129, 0.6)" }}
            type='submit' 
            className='bg-emerald-800/40 p-2 w-full rounded-xl'>
                Submit
            </motion.button>
        </form>

    </motion.div>
);
}

export default CreatePost