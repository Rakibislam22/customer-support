
import './App.css'
import Navbar from './components/headers/Navbar'
import img from './assets/vector1.png'
import Footer from './components/Footer'
import Tickets from './components/tickets/Tickets';
import { Suspense, useState } from 'react';
import TaskStatus from './components/taskStatus/TaskStatus';
import Resolved from './components/taskStatus/Resolved';
import { ToastContainer, toast } from 'react-toastify';


const ticketPromise = fetch('data.json')
  .then(res => res.json());



function App() {
  const [inProgress, setInProgress] = useState(0);
  const [resolved, setResolved] = useState(0);

  const [inProgressArray, setInProgressArray] = useState([]);
  const [resolvedArray, setResolvedArray] = useState([]);

  const handleInProgress = (title) => {

    if (!inProgressArray.includes(title)) {
      const newCount = inProgress + 1;
      setInProgress(newCount);
      setInProgressArray([...inProgressArray, title]);

      toast("Task moves In-Progress..!!");

    }
    else toast("Task already In-Progress!!");

  }

  const handleResolved = (rTitle) => {
    setInProgressArray([...inProgressArray.filter(a => a !== rTitle)]);
    setResolvedArray([...resolvedArray, inProgressArray.find(a => a === rTitle)]);
    setResolved(resolved + 1);
    setInProgress(inProgress - 1);
    toast("Task completed!");
  }

  return (

    <>
      <Navbar></Navbar>
      <div className='bg-[#f5f5f5]' >
        <div className='pt-20 max-w-[1280px] lg:mx-auto mx-2 flex max-sm:flex-col  gap-5 '>
          <div className='flex-1 flex items-center justify-center  text-white rounded-xl  bg-gradient-to-br from-[#632EE3] to-[#9F62F2] '>
            <img className='object-cover overflow-auto' src={img} alt="" />
            <div className='space-y-3 min-w-20 text-center'>
              <h2 className='text-lg whitespace-nowrap'>In-Progress</h2>
              <h1 className='text-4xl font-bold'>{inProgress}</h1>
            </div>
            <img className='rotate-y-180  object-cover overflow-auto' src={img} alt="" />
          </div>
          <div className='flex-1 flex items-center justify-center text-white rounded-xl text-center  bg-gradient-to-r from-[#54CF68] to-[#00827A]'>
            <img className='object-cover overflow-auto' src={img} alt="" />
            <div className='space-y-3 min-w-20 text-center'>
              <h2 className='text-xl'>Resolved</h2>
              <h1 className='text-4xl font-bold'>{resolved}</h1>
            </div>
            <img className='rotate-y-180  object-cover overflow-auto' src={img} alt="" />
          </div>
        </div>
        <div className='max-w-[1280px] lg:mx-auto mx-2 py-20 flex max-sm:flex-col-reverse justify-center items-start gap-8' >
          <div>
            <h1 className='text-2xl font-semibold text-[#34485A] pb-3'>Customer Tickets</h1>
            <Suspense fallback={<div className="fixed inset-0 flex flex-col justify-center items-center bg-white z-50">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#632EE3]"></div>
              <p className="mt-4 text-lg font-semibold text-[#34485A]">
                Loading Dashboard...
              </p>
            </div>}>
              <Tickets resolvedArray={resolvedArray} inProgressArray={inProgressArray} tickets={ticketPromise} handleInProgress={handleInProgress}></Tickets>
            </Suspense>

          </div>
          <div className='lg:w-[350px] w-full'>
            <div className='pb-10'>
              <h1 className='text-2xl font-semibold text-[#34485A] pb-2'>Task Status</h1>
              <TaskStatus inProgressArray={inProgressArray} handleResolved={handleResolved}></TaskStatus>
            </div>

            <div >
              <h1 className='text-2xl font-semibold text-[#34485A] pb-2'>Resolved Task</h1>
              <Resolved resolvedArray={resolvedArray}></Resolved>
            </div>


          </div>
        </div>

      </div>

      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
