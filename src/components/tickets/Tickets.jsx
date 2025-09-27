import React, { use } from 'react';
import Ticket from './Ticket';

const Tickets = ({ tickets, handleInProgress, resolvedArray, inProgressArray }) => {

    const ticketsData = use(tickets);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {
              resolvedArray.length  === 15 ?  <h1>There is no tickets.....</h1>
              : ticketsData.map(ticket => <Ticket key={ticket.id} resolvedArray={resolvedArray} handleInProgress={handleInProgress} inProgressArray={inProgressArray} ticket={ticket}></Ticket>)
            }

        </div>
    );
};

export default Tickets;