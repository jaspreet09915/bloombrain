import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
export default function Home() {
  return (
  <>
  <NavBar/>
  <div>
    Content hai bus
  </div>
  <Footer/>
  </>   
  )
}
