import React from 'react'
import Image from 'next/image'
export const Right = (props) => {
  return (
      <>
      <section className="text-gray-400 bg-gray-900 body-font" id={props.ID}>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        
        <div className="lg:max-w-lg  lg:ml-10 md:mr-5 lg:w-full md:w-1/2 w-5/6">
            <Image className="object-cover object-center rounded w-2/3" src={props.Img}   alt="hero"  />
          </div>
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        
        <div className="lg:flex-grow  md:w-2/2 lg:pr-26 md:pr-10 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">{props.Heading}
          
        </h1>
          <p className="mb-8 leading-relaxed">{props.Subheading}
          </p>
          <p className="mb-8 leading-relaxed">{props.Para} </p><br/>{ props.SubPara}
        <div className="flex justify-center flex-col w-30 mt-10 rounded-2xl text-center">
          {/* <button className="inline-flex text-white bg-indigo-500 rounded-xl border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600  text-lg">Read More</button> */}
          
        </div>
  </div></div>
        </div></section>
      
      </>
  )
}
