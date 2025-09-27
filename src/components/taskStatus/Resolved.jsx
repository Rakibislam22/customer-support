import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Resolved = ({resolvedArray}) => {
    return (
        <div>
            {   
                resolvedArray.length > 0 ?
                 resolvedArray.map(title => {
                    return(
                    <div className=' p-2 bg-[#E0E7FF] my-3 rounded-sm'>
                        <h1 className='text-[#001931] font-medium'>{title}</h1>
                        <div className='flex items-center gap-2 text-[#02A53B]'>
                        <FaCheck></FaCheck>
                        <p>Completed</p>
                        </div>
                    </div>
                    )
                 })
                :<p>No resolved tasks yet.</p>
            }
            
        </div>
    );
};

export default Resolved;