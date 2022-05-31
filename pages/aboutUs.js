import React from 'react'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import Image from 'next/image'
import {SiHatenabookmark} from 'react-icons/si';

const aboutUs = () => {
  return (
   <>
    <NavBar/>
    <div className="1st">
    <div class="">
    
    <div class="row">
        <div class="col-span-12 ">
            <div class="text-center">
   <h2><span className='text-purple-500 text-3xl font-bold'>Quality Education For All</span> </h2>
   <div
            class="flex items-center   mt-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
          >
            <p class="text-center font-semibold mx-4 mb-0"><SiHatenabookmark className='text-2xl text-blue-500'/></p>
          </div>
          <p className=' text-center text-sm text-gray-300'>Now see how we will help it bloom:</p>
   </div>
        </div>
    </div>

   <div className='my-6'>
   <div class=" flex flex-row align-middle align-items-center">
   <div class="col-lg-6  order-last p-0 ">
    <p class="font-bold mb-22 text-zinc-900">Our resolution is to make students understand a concept like values which will ultimately help them solve real life problems in their lives.</p>
   
      
      <p class="mt-5 mb-2"><strong className='text-purple-500' > Education:</strong> We aim to enhance childrens learning in history, math, science, and much more from the classroom into an interactive experience on the web.</p>
      <p class="mb-2"><strong className='text-purple-500'  >Communication:</strong> We support the development of confidence in communication within the parent-child relationship and in building other relationships. </p>
      <p class=" mb-5"><strong className='text-purple-500' >Invention:</strong> We aim to help budding programmers from their basics. Kids are able to read about programmable languages and to test their new knowledge in a safe environment. Children are also introduced to inventors and their inventions.     
   </p> 
      <p class=" font-bold text-3xl mb-22 text-zinc-900">  We aim to do that through:&nbsp;</p>
   <ul>
    <li class="mb-2"><strong className='text-purple-500' >Analytical thinking</strong>: Sharpens problem solving and reasoning power</li>
   
   <li class="mb-2"><strong className='text-purple-500' > Public Speaking</strong>: Grows confident and ability to express</li>
   
   <li class="mb-2"><strong className='text-purple-500' >Personality Development</strong>: Increases focus and concentration</li>
   
   <li class="mb-2"><strong className='text-purple-500' >Conceptual Learning</strong>: Develops an understanding of concepts at their own pace</li>
   </ul>
   </div>
   <div class="col-lg-6 pr-70 md-pr-15">
   
   <div class="sec-title ">
   <div>
   <img
            src="/about-mind.png"
            alt="Picture of the author"
            width={780}
            height={620}
            />
  
   </div>										
   </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <div className="2nd"></div>
    <div className="3rd"></div>
    <div className="4th"></div>
    <Footer/>
   </>
  )
}

export default aboutUs