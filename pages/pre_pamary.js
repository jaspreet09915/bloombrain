import React from 'react'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import Image from 'next/image'
const pre_pamary = () => {
  return (
   <>
   <NavBar/>
   <div>
    <div className="1st"> 
    <Image
            src="/header_pre_school_banner.jpg"
            alt="Picture of the author"
            width={1380}
            height={900}
          />
    </div>
    <div className="2nd">
    <Image
            src="/learning_meet_fun_bg.jpg"
            alt="Picture of the author"
            width={1380}
            height={900}
          />
    </div>
    <div className="3rd">
    <Image
            src="/physical_dev_bg.jpg"
            alt="Picture of the author"
            width={1380}
            height={900}
          />
    </div>
    <div className="4th">
    <Image
            src="/clound.png"
            alt="Picture of the author"
            width={1380}
            height={900}
          />
    </div>
    <div className="5th flex flex-row">
     <div className='5.1'>
     <Image
            src="/big_schoolside-bg-2.png"
            alt="Picture of the author"
            width={1380}
            height={900}
          />
     </div>
     <div className="5.2">
     <Image
            src="/big_schoolside-bg.png"
            alt="Picture of the author"
            width={1380}
            height={900}
          />   
     </div>
    </div>
    <div className="6th">
    <Image
            src="/big_school_bg.png"
            alt="Picture of the author"
            width={1380}
            height={900}
          />
    </div>
    <div className="7th bg-white w-10/12 h-4/6">
     
    </div>
   <div className="8">
   <Image
            src="/ethics_heading_bg.jpg"
            alt="Picture of the author"
            width={1380}
            height={900}
          />
   </div>
   <div className="9">
   <Image
            src="/rhymes_kid.png"
            alt="Picture of the author"
            width={1380}
            height={900}
          />
   </div>
   <div className="10">
   <Image
            src="/packags-bg.jpg"
            alt="Picture of the author"
            width={1380}
            height={900}
          />
   </div>
   </div>
   <Footer/>
   </>
  )
}

export default pre_pamary