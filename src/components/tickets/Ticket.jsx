import React from 'react';
import { BsCalendar } from 'react-icons/bs';
import { FaCircle } from 'react-icons/fa';

const Ticket = ({ ticket, handleInProgress, resolvedArray, inProgressArray }) => {
   
    return (
        <div className={`bg-white p-3 md:p-5 rounded-sm ${resolvedArray.includes(ticket.title) ? "hidden" : " "}`} onClick={() => handleInProgress(ticket.title)}>
            <div className='flex justify-between items-center'>
                <h1 className='md:text-lg font-medium text-[#001931]'>{ticket.title}</h1>
                <div className={` px-2 md:px-3 py-1 rounded-2xl max-sm:text-[0.8rem]
                ${inProgressArray.includes(ticket.title) ? "bg-[#F8F3B9]" : "bg-[#B9F8CF]"}    
                
                ${inProgressArray.includes(ticket.title) ? "text-[#9C7700]" : "text-[#0B5E06]"}
                
                `}>
                    <div className='flex items-center justify-center gap-2 font-medium'>
                        <FaCircle className={inProgressArray.includes(ticket.title) ? "text-[#FEBB0C]" : "text-[#02A53B]"}></FaCircle> {inProgressArray.includes(ticket.title) ? "In-Progress" :ticket.status}
                    </div>
                </div>
            </div>
            <p className='text-[0.9rem] text-[#627382] py-3'>{ticket.description}</p>
            <div className=' flex justify-between items-center text-[0.8rem]'>
                <div className='flex justify-center items-center gap-5 '>
                    <p className='text-[#627382]'>#{ticket.id}</p>
                    <p className={
                        ticket.priority === "HIGH PRIORITY" ?
                            "text-[#F83044]"
                            : ticket.priority === "MEDIUM PRIORITY" ? "text-[#FEBB0C]" : "text-[#02A53B] "
                    } >{ticket.priority}</p>
                </div>
                <div className='flex justify-center items-center gap-5 '>
                    <p className='text-[#627382]'>{ticket.customer}</p>
                    <div className='text-[#627382]'> <div className='flex justify-center items-center gap-2'><BsCalendar></BsCalendar> {ticket.createdAt}</div></div>
                </div>
            </div>
        </div>
    );
};

export default Ticket;