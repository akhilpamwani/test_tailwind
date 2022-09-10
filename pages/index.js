import Head from 'next/head'
import { Hero } from '../Components/Hero/Hero'
import { Nav } from '../Components/Navbar/Nav'
import { Navbar } from '../Components/Navbar/NavBar'

export default function Home() {
  return (
    <>
      <div className='lg:text-white lg:bg-slate-900 md:text-white md:bg-slate-900 sm:text-white sm:bg-slate-900'>
{/* <Nav/> */}
     <Navbar/>    
   <Hero/> 
      </div>
      
    </>
  )
}
