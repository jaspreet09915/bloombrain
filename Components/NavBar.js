import React from 'react'
import {GrMail} from 'react-icons/gr';
import {FiPhoneCall} from 'react-icons/fi';
import {BiExit} from 'react-icons/bi';
import Image from 'next/image'
import Link from "next/link";
import { useRef } from 'react';
const NavBar = () => {
  // const ref = useRef();
  const ref = useRef();
  const toggleCart = (event) => {

   console.log('clicked');
  console.log(ref);
  console.log(ref.current.classList)
  console.log(ref.current.classList.add('hidden'))
  if (ref.current.classList.contains("hidden")) {
    ref.current.classList.remove("hidden");
    ref.current.classList.add("block");
  } else if (!ref.current.classList.contains("hidden")) {
    ref.current.classList.remove("block");
    ref.current.classList.add("hidden");
  }
  };
  return (
    <div className=''>
      <div className='flex flex-row  sticky  w-full bg-purple-600 rounded-2xl h-12 text-white'>
       <div className='ml-24 pr-2 border-r pt-3 h-12 cursor-pointer hover:text-blue-400'><GrMail className='cursor-pointer inline-flex mr-1 '/><a href='mailto:info@bloombraineducation.com'>info@bloombraineducation.com</a></div> 
        <div className='ml-5 pt-3 h-12 cursor-pointer mr-40 hover:text-blue-400'><FiPhoneCall className='inline-flex mr-1'/><a href='https://www.bloombraineducation.com/tel:18002120944' target='_blank'>1800-212-0944</a></div> 
       <div className='ml-80 pt-1 cursor-pointer h-12'><img src="https://www.bloombraineducation.com/assets/images/play-store.svg" alt="" /></div> 
      <div className='ml-5 pt-3 h-12'><BiExit className='inline-flex mr-2 '/>  <span className='cursor-pointer hover:text-blue-400'><Link href={'/login'}>login</Link></span> /  <span className='cursor-pointer hover:text-blue-400'><Link href='/register'>Register</Link></span>  </div>
      </div>
      <div className='bg-black h-7  '>notification</div>
      <div  className=' flex flex-row  rounded-2xl h-28 text-black'>
      <div className='mr-12 ml-24 flex '>
         
        <div className='  my-auto cursor-pointer'>  <Image
            src="/Bloom-logo-new.png"
            alt="Picture of the author"
            width={120}
            height={80}
            /><Link href='/' className=' top-28 m-9 hidden'> a</Link></div>
         
      </div>
      <div className='flex ml-28 mr-14'>
          <div className=' hover:bg-blue-300 cursor-pointer hover:border-blue-700 rounded p-2 mr-3 align-middle my-auto'>
            <Link href={'/aboutUs'}>
        About Company
        </Link>
        </div> 
        <div class="flex justify-center">
  <div>

  </div>
</div>
        <div className="1st">

        <div onMouseOver={toggleCart}  className='z-20 mx-3 mt-9 hover:bg-blue-300 cursor-pointer hover:border-blue-700 rounded p-2 align-middle my-auto'>
        Courses
        </div >
        <ul ref={ref}  className="bg-white   border-solid border-2 absolute z-30 border-blue-200 hover:border-blue-600 rounded-3xl ">
          <li className='border-b-2 border-solid border-gray-300 hover:bg-blue-500 rounded-tr-3xl rounded-tl-3xl pt-2 px-1'><Link href={'/academic'}>Academics</Link></li>
          <li className='border-b-2 border-solid border-gray-300 hover:bg-blue-500  pt-2 px-1'><Link href={'/codding_for_kids'}>Codding for Kids</Link></li>
          <li className='border-b-2 border-solid border-gray-300 hover:bg-blue-500  pt-2 px-1'><Link href={'/english_speaking_for_kids'}>English Speaking for kids</Link></li>
          <li className='border-b-2 border-solid border-gray-300 hover:bg-blue-500  pt-2 px-1'><Link href={'/english_speaking_for_adult'}>English Speaking for adults</Link></li>
          <li className='border-b-2 border-solid border-gray-300 hover:bg-blue-500 rounded-br-3xl rounded-bl-3xl pb-2 px-1'><Link href={'/pre_pamary'}>Blooming Bubs (Pre-Pramiry)</Link></li>
        </ul>
        
        </div>
        <div className='mx-3  hover:bg-blue-300 cursor-pointer hover:border-blue-700 rounded p-2  align-middle my-auto'>
         <div><Link href={"/contact"}> Contact us</Link></div>
        </div>
         
      </div>
      <div className='ml-52 flex'>
         <div className='align-middle my-auto cursor-pointer hover:border-2 hover:border-blue-600  backdrop-blur-sm bg-blue-700 p-3 rounded-2xl h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500 '>
           <a href='/demo'>
        Book Free Demo Class
           </a>
        </div>
       
      </div>
      </div>
    </div> 
  )
}

export default NavBar