import React from 'react'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import Image from 'next/image'
import Link from 'next/link'
import Router from 'next/router';
import { useState } from 'react';
const login = () => {
 
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleChange = (e)=>{
      console.log(e.target.value)
 
      if(e.target.name=="email"){
          setEmail(e.target.value)
      }
      else if(e.target.name == "password"){
          setPassword(e.target.value)
      }
    
  }

  const handleSubmit = async (e)=>{
    console.log(e);
    e.preventDefault();
    const data = {  email,password};
 
    const res = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    let response = await res.json()
    console.log(response)
    
    setEmail('')
    setPassword('')
    Router.push("http://localhost:3000/userCart")
}
  return (
    <div>
     <NavBar/>
     <div className='h-max px-28 py-4'>
     <section class="h-full w-full ">
  <div class="px-6 h-full text-gray-800">
    <div
      class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
    >
      <div
        class="flex  grow-0 shrink-1 justify-center md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0 "
      >
       <div>
            <Image
            src="/login-page.png"
            alt="Picture of the author"
            width={300}
            height={400}
            />
            </div>
      </div>
      <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
        <form onSubmit={handleSubmit}  method="POST" >
          <div
            class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
          >
            <p class="text-center font-semibold mx-4 mb-0">Sign in</p>
          </div>

          {/* <!-- Email input --> */}
          <div class="mb-6">
            <input
              type="text"
              value={email}
              onChange={handleChange}
              name='email'
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="email"
              placeholder="Email address"
            />
          </div>

          {/* <!-- Password input --> */}
          <div class="mb-6">
            <input
              type="password"
              name='password'
              value={password}
              onChange={handleChange}
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="password"
              placeholder="Password"
            />
          </div>

          <div class="text-center lg:text-left">
            <button

              type="submit"
              class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Login
            </button>
            <p class="text-sm font-semibold mt-2 pt-1 mb-0">
              Don't have an account?
              <a
                href="#!"
                class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                ><Link href={'/register'}>Register</Link></a
              >
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</section> 
  </div>
    <Footer/>
    </div>
  )
}

export default login