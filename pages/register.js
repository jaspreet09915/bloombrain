import React from 'react'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import Image from 'next/image'
import { useState } from 'react';
const register = () => {
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [phone, setPhone] = useState();
    const [altNum, setAltNum] = useState();
    const [email, setEmail] = useState();
    const [city, setCity] = useState();
    const [childrenClass, setChildrenClass] = useState();
    const [password, setPassword] = useState();

    const handleChange = (e)=>{
        console.log(e.target.value)
        if(e.target.name =="fname"){
            setFname(e.target.value)
        }
        else if(e.target.name == "lname"){
            setLname(e.target.value)
        }
        else if(e.target.name=="phone"){
            setPhone(e.target.value)
        }
        else if(e.target.name=="altNum"){
            setAltNum(e.target.value)
        }
        else if(e.target.name=="email"){
            setEmail(e.target.value)
        }
        else if(e.target.name == "city"){
            setCity(e.target.value)
        }
        else if(e.target.name == "childrenClass"){
            setChildrenClass(e.target.value)
        }
        else if(e.target.name == "password"){
            setPassword(e.target.value)
        }
        console.log(fname)
    }

    const handleSubmit = async (e)=>{
        console.log(e);
        e.preventDefault();
        const data = {fname:fname ,lname,city,phone,altNum,email,childrenClass,password};
        // let res = await fetch('http://localhost:3000/api/register',{
        //     method:"POST",
        //     header:{
        //         'Content-Type':'application/json', 
        //     },
        //     body: JSON.stringify(data),
        // })
        const res = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        let response = await res.json()
        console.log(response)
        setFname('')
        setLname('')
        setPhone('')
        setAltNum('')
        setCity('')
        setChildrenClass('')
        setPassword('')
    }
  return (
    <div>
     <NavBar/>
     <div class="min-w-screen min-h-screen bg-slate-100 flex items-center justify-center px-5 py-5">
    <div class="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" >
        <div class="md:flex w-full">
            <div class="hidden md:block w-1/2 bg-white py-10 px-10">
            <Image
            src="/signup.jpg"
            alt="Picture of the author"
            width={1500}
            height={2000}
          />
            </div>
            <form onSubmit={handleSubmit}  method="POST"  class="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div class="text-center mb-10">
                    <h1 class="font-bold text-3xl text-gray-900">REGISTER</h1>
                    <p>Enter your information to register</p>
                </div>
                <div>
                    <div class="flex -mx-3">
                        <div class="w-1/2 px-3 mb-5">
                            <label for="First_name" class="text-xs font-semibold px-1">First name</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input  value={fname} onChange={handleChange} type="text" id='fname' name='fname' class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="First Name"/>
                            </div>
                        </div>
                        <div class="w-1/2 px-3 mb-5">
                            <label for="" class="text-xs font-semibold px-1">Last name</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input value={lname} onChange={handleChange} type="text" id='lname' name='lname' class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Last Name"/>
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-1/2 px-3 mb-5">
                            <label for="" class="text-xs font-semibold px-1">City</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input value={city} onChange={handleChange} type="text" id='city' name='city' class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Enter Your City"/>
                            </div>
                        </div>
                        <div class="w-1/2 px-3 mb-5">
                            <label for="" class="text-xs font-semibold px-1">Phone</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input value={phone} onChange={handleChange} name="phone" id='phone' type="number" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Enter your Phone Number"/>
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-1/2 px-3 mb-5">
                            <label for="" class="text-xs font-semibold px-1">Alternative Number</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input value={altNum} onChange={handleChange} type="number" name='altNum' id='altNum' class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Enter your Aternative Number"/>
                            </div>
                        </div>
                        <div class="w-1/2 px-3 mb-5">
                            <label for="" class="text-xs font-semibold px-1">Email Address</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input value={email} onChange={handleChange} type="email" name='email' class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Enter Your Email Address"/>
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <label for="" class="text-xs font-semibold px-1">Class of a children</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <input value={childrenClass} onChange={handleChange} type="text" name='childrenClass' id='childrenClass' class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Enter Your Child Class"/>
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-1/2 px-3 mb-5">
                            <label for="" class="text-xs font-semibold px-1">Password</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input value={password} onChange={handleChange} type="password" name='password' id='password' class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Enter Password"/>
                            </div>
                        </div>
                        <div class="w-1/2 px-3 mb-5">
                            <label for="" class="text-xs font-semibold px-1">Conform Password</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input value={password} onChange={handleChange} type="password" id='cpassword' name='cpassword' class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Conform Password"/>
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <button type='submit' class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">Create your Account</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

<Footer/>
{/* <!-- BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES --> */}
<div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
 
</div></div>
  )
}

export default register