import React from 'react';

const TaskStatus = ({ inProgressArray ,handleResolved }) => {
    return (
        <div>
            {
                inProgressArray.length > 0 ?
                    inProgressArray.map( title => {
                       return(
                        <div className=' p-2 bg-white my-3 rounded-sm'>

                         <h1 className='text-[#001931] font-medium'>{title}</h1>
                         <button onClick={() => handleResolved(title)} className='btn bg-[#02A53B] text-white w-full my-4'>Complete</button>

                        </div>
                       ) 
                    })
                : <p>Select a ticket to add to Task Status</p>
            }
            
        </div>
    );
};

export default TaskStatus;