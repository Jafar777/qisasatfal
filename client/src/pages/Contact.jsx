import React from 'react'
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
export default function Contact() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <div className='mb-5'>
      <h1>يمكنكم التواصل معنا عبر ايميلنا الرسمي </h1>
      </div>
      
      <p className='mb-2'>info@qisasatfal.com</p>
      <a className='flex items-center text-blue-700 hover:underline' href="mailto:info@qisasatfal.com"><PiMicrosoftOutlookLogoFill className='mr-2 text-2xl'/>اضغط هنا للمراسلة المباشرة</a>
    </div>
  )
}
