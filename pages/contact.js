import React from 'react'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import Image from 'next/image'
import {HiMail , HiLocationMarker} from 'react-icons/hi';
import {FiPhoneCall} from 'react-icons/fi';
import {GiHouse} from 'react-icons/gi';
import {BsWhatsapp} from 'react-icons/bs';
const contact = () => {
  return (
    <div>
     <div>
     <NavBar/>
     <div className="px-20 mb-4 pb-2">

     <div class="min-w-screen min-h-screen bg-white flex items-center justify-center px-5 py-5">
    <div class="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" >
        <div class="md:flex w-full">
            <div class=" hidden  md:block w-1/2 bg-white py-10 pl-40 px-14">
           <div>
            <Image
            src="/contact_image.png"
            alt="Picture of the author"
            width={350}
            height={450}
            />
            </div>
            </div>
            <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
               
                <div class="col-lg-6 pl-50 md-pl-15">

<div class="rs-contact-wrap">

  <div class="inner-part my-5">

      <h2 class=" font-bold text-3xl text-black ">Get in touch</h2>                                   

  </div>

  <div class="address-item flex mb-10">
    <div class="address-icon  mr-6 ">
           <HiMail className='text-3xl text-blue-500 '/>
     </div>  
      <div class="address-text flex flex-col ">
           <span class="label">Email Addresss</span>
           <span class="des">info@bloombraineducation.com</span>

       </div>

  </div> 

  <div class="address-item flex mb-10">

      <div class="address-icon  mr-6 ">

        <FiPhoneCall className='text-3xl text-blue-500 '/>

      </div>

      <div class="address-text flex flex-col">

           <span class="label">Toll Free Number</span>

           <span class="des"><a href="tel:1800-212-0944">1800-212-0944</a></span>

       </div>

  </div> 

  <div class="address-item flex mb-10">

      <div class="address-icon  mr-6 ">

          <BsWhatsapp className='text-3xl text-blue-500 '/>

      </div>

      <div class="address-text flex flex-col">

           <span class="label">Whatsapp Number</span>

           <span class="des"><a href="https://api.whatsapp.com/send?phone=916397708952&amp;text=Hello, I would like to enquire about the courses. Please help me with all the details." target="_blank"> 639-770-8952 </a></span>

       </div>

  </div> 

  <div class="address-item flex mb-10">

      <div class="address-icon  mr-6 ">

         <HiLocationMarker className='text-3xl  text-blue-500 '/>

      </div>

      <div class="address-text flex flex-col">

           <span class="label">Address</span>

           <span class="des">2/9 , 2nd Floor, Sarai Jullena, New Friends Colony, Opposite Surya Sofitel Hotel<br/>New-Delhi-110025</span>

       </div>

  </div>
  
  <div class="address-item flex mb-10">

      <div class="address-icon  mr-6 ">

        <GiHouse className='text-3xl text-blue-500 '/>

      </div>

      <div class="address-text">

           <span class="label">Bank A/C Details</span>

           <ul class="des">
               <li><b className='font-bold text-black'>Name:</b> Bloombrain Learning Solutions Pvt Ltd</li>
               <li><b className='font-bold text-black' >#A/C :</b> 025505005601</li>
               <li><b className='font-bold text-black'>#IFSC:</b> ICIC0000255</li>
               <li><b className='font-bold text-black'>Branch:</b> Sahibabad</li>
               <li><b className='font-bold text-black'>UPI ID:</b> bloombrain@icici</li>
           </ul>

       </div>

  </div>

</div> 

</div>
            </div>
        </div>
    </div>
</div>
 </div>
<Footer/>
{/* <!-- BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES --> */}
<div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
 
</div></div>
    </div>
  )
}

export default contact