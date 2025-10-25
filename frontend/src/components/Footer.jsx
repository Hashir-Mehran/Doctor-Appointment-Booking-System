import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* Left side */}
        <div>
            <img src={assets.logo} onClick={()=>navigate('/')}  alt=""  className='mb-5 w-44 cursor-pointer' />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Prescripto is an innovative platform designed to simplify doctor appointments and healthcare access. Prescripto has been helping patients connect with trusted doctors quickly and securely, providing a reliable way to book, manage, and track medical consultations anytime, anywhere.</p>
        </div>
        {/* center side */}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        {/* right side */}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+92-3168606867</li>
                <li>hashirmehran1002@gmail.com</li>
            </ul>
        </div>
      </div>
      {/* copyright */}
      <div>
        <hr className="border-t border-gray-300" />
        <p className='py-5 text-sm text-center'>Copyright 2024 @ prescripto - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
