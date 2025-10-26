import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets_frontend/assets'
import RelatedDocters from '../components/RelatedDocters'

const Appointment = () => {
  const {docId} = useParams()

  const {doctors,currencySymbol} = useContext(AppContext)
  const daysOfWeek = ['SUN','MON','TUE','WED','THU','FRI','SAT']

  const [docInfo,setDocInfo] = useState(null) 
  const [docSlotes,setDocSlotes] = useState([])

  const [slotIndex,setSlotIndex] = useState(0)
  const [slotTime,setSlotTime] = useState('')
  
  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
  }

const getAvalabelSlots = async () => {
  setDocSlotes([]); // reset slots
  let today = new Date();

  for (let i = 0; i < 7; i++) {
    let currentDate = new Date(today);
    currentDate.setDate(today.getDate() + i);

    // End time (9 PM)
    let endTime = new Date(today);
    endTime.setDate(today.getDate() + i);
    endTime.setHours(21, 0, 0, 0);

    // Start time
    if (i === 0) {
      // For today
      if (currentDate.getHours() < 10) {
        currentDate.setHours(10, 0, 0, 0);
      } else {
        currentDate.setHours(currentDate.getHours() + 1);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      }
    } else {
      // Future days
      currentDate.setHours(10, 0, 0, 0);
    }

    let timeSlots = [];

    while (currentDate < endTime) {
      // ✅ 12-hour format (AM/PM)
      let formattedTime = currentDate.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true, // <--- 12-hour format enable
      });

      timeSlots.push({
        datetime: new Date(currentDate),
        time: formattedTime,
      });

      // increment 30 minutes
      currentDate.setMinutes(currentDate.getMinutes() + 30);
    }

    // add day slots to state
    setDocSlotes((prev) => [...prev, timeSlots]);
  }
};



  useEffect(()=>{
    fetchDocInfo()
  },[doctors,docId])

  useEffect(()=>{
    getAvalabelSlots()
  },[docInfo])

  useEffect(()=>{
    console.log(docSlotes)
  },[docSlotes])
  return docInfo && (
    <div>
      {/* Doctors details */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
        </div>
        <div className='flex-1 border border-gray-300 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt=[-80px] sm:mt-0'>
          {/* doctor info */}
          <p className='flex items-center gap-2 text-3xl font-medium text-gray-700'>
            {docInfo.name} 
            <img className='w-5' src={assets.verified_icon} alt="" />
          </p>
          <div className='flex items-center gap-2 text-5 mt-1 text-gray-600'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border-gray-200 border text-xs rounded-full cursor-text'>{docInfo.experience}</button>
          </div>
          {/* about section of doctor  */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
              About 
              <img className='size-3' src={assets.info_icon} alt="" />
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>
          <p className='text-gray-500 font-medium mt-4'>
            Appointment fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span>
          </p>
        </div>
      </div>
     {/* Booking Slotes */}
    <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
      <p>Booking slots</p>
      <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
        {
          docSlotes.length && docSlotes.map((item,index)=>(
            <div onClick={()=>setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`} key={index}>
              <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
              <p>{item[0] && item[0].datetime.getDate()}</p>
            </div>
          ))
        }
      </div>
      <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
        {docSlotes.length && docSlotes[slotIndex].map((item,index)=>(
          <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`} key={index}>
            {item.time.toLowerCase()}
          </p>
        ))}
      </div>
      <button className='bg-primary text-white text-sm font-light px-20 py-3 rounded-full my-6'>Book an appointment</button>
    </div>
    {/* listing releated doctore */}
    <RelatedDocters docId={docId} speciality={docInfo.speciality}/>
    </div>
  )
}

export default Appointment
