import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
export default function Home() {
  return (
  <>
  <NavBar/>
  <div className='w-full'>
    <div className="container min-w-full  bg-blue-500 w-full h-44">
      image container
    </div>

    <div className="container min-w-full bg-slate-300 w-full h-44">
      learning with bloombraineducation
    </div>

    <div className="container min-w-full bg-slate-600 w-full h-44 ">
      our powerfull teaching
    </div>

    <div className="container min-w-full bg-slate-300 w-full h-44">
      Top Courses 
    </div>

    <div className="container min-w-full bg-blue-500 w-full h-44">
      Our students
    </div>
  </div>
  <Footer/>
  </>   
  )
}
