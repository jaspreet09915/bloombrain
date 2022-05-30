import React from 'react'
import {GrMail} from 'react-icons/gr';
import {FiPhoneCall} from 'react-icons/fi';
import {BiExit} from 'react-icons/bi';
import Image from 'next/image'
const NavBar = () => {
  return (
    <div className=''>
      <ul className='flex flex-row bg-purple-600 rounded-2xl h-12 text-white'>
      <li className='ml-24 pr-2 border-r pt-3 h-12'><GrMail className='inline-flex mr-1'/>info@bloombraineducation.com</li>
      <li className='ml-5 pt-3 h-12 mr-40'><FiPhoneCall className='inline-flex mr-1'/>1800-212-0944</li>
      <li className='ml-80 pt-1 h-12'><img src="https://www.bloombraineducation.com/assets/images/play-store.svg" alt="" /></li>
      <li className='ml-5 pt-3 h-12'><BiExit className='inline-flex mr-2 '/><span>login</span>/<span>Register</span></li>
      </ul>
      <div className='bg-black h-7'>notification</div>
      <div  className=' flex flex-row   rounded-2xl h-28 text-black'>
      <div className='mr-12 ml-24 flex'>
        <div className='  my-auto'>  <Image
            src="/Bloom-logo-new.png"
            alt="Picture of the author"
            width={120}
            height={80}
            /></div>
      </div>
      <div className='flex ml-28 mr-14'>
        <div className=' hover:bg-blue-300 rounded p-2 mr-3 align-middle my-auto'>
        About Company
        </div>
        <div class="flex justify-center">
  <div>
   
  </div>
</div>
        <div className='mx-3 hover:bg-blue-300 rounded p-2 align-middle my-auto'>
        Courses
        </div>
        <div className='mx-3 hover:bg-blue-300 rounded p-2  align-middle my-auto'>
         <div>Contact us</div>
        </div>
      </div>
      <div className='ml-52 flex'>
        <div className='align-middle my-auto'>
        Book Free Demo Class
        </div> 
      </div>
      </div>
    </div> 
  )
}

export default NavBar