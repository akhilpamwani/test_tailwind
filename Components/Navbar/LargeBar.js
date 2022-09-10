import React, { useState } from 'react'
import { Dropdown } from "flowbite-react";
export const LargeBar = () => {
  const [open, setOpen] = useState(true)
  const [opens, setOpens] = useState(true)
  return (
    <>
      <header className="opacity-0 lg:h-28 lg:fixed lg:w-full lg:z-50 lg:bg-inherit lg:top-0 lg:shadow-lg lg:shadow-gray-500 lg:opacity-100 md:h-28 md:top-0 md:z-50 md:bg-inherit md:fixed md:w-full md:shadow-lg md:shadow-gray-500  md:opacity-100  sm:z-50 sm:top-0 sm:bg-inherit sm:shadow-lg sm:fixed sm:h-28 sm:w-full sm:opacity-100 sm:shadow-gray-500    ">
        <div className={open ? " mx-auto flex    flex-row items-center" : " mx-auto flex   -mt-16 flex-row items-center"}>
          <a className={open ? "flex  items-center font-bold  mt-10" : "flex  items-center font-bold  -mt-40"}>

            History Of Computers
          </a>
          <nav className={open ? "ml-auto flex font-medium   flex-wrap items-center  text-lg justify-center" : "ml-auto flex font-medium  -mt-40  flex-wrap items-center  text-lg justify-center"}>
            {/* <a  href='#Computer'className="sm:mr-4 sm:p-2 sm:hover:p-2 sm:bg-blue-600 sm:rounded-xl  md:mr-5 md:p-2 md:opacity-100  md:hover:p-3 md:bg-blue-600 md:rounded-xl  lg:mr-5 lg:p-3 lg:opacity-100 lg:hover:p-3 lg:bg-blue-600 lg:rounded-xl lg:text-inherit md:text-white sm:text-white lg:text-white lg:hover:text-white" >Computer</a> */}

            <Dropdown label="Pre Generaion">
              <a href="#Abacus">
                <Dropdown.Item>
                  Abacus
                </Dropdown.Item>
              </a>

              <a href="#Napier"><Dropdown.Item>
                Napier's Bones
              </Dropdown.Item></a>

              
              <a href="#Pascaline">
                <Dropdown.Item>
                Pascaline
              </Dropdown.Item></a>
              <a href="#Stepped">
                <Dropdown.Item>
                Stepped Reckoner
                </Dropdown.Item></a>
              <a href="#Difference">
                <Dropdown.Item>
                Difference Engine
                </Dropdown.Item></a>
              <a href="#Analytical">
                <Dropdown.Item>
                Analytical Engine
                </Dropdown.Item></a>
              <a href="#Tabulating">
                <Dropdown.Item>
                Tabulating Machine
                </Dropdown.Item></a>
              <a href="#Differential">
                <Dropdown.Item>
                Differential Analyzer
              </Dropdown.Item></a>
              <a href="#Mark">
                <Dropdown.Item>
                Mark 1
              </Dropdown.Item></a>
            </Dropdown>

            <div className='mr-5'>
                
</div>

            <Dropdown label=" Generaion">
              <a href="#First">
                <Dropdown.Item>
                  First Generation Computers
                </Dropdown.Item>
              </a>

              <a href="#Second">
                <Dropdown.Item>
                Second Generation Computers
              </Dropdown.Item></a>


              <a href="#Third">
                <Dropdown.Item>
                Third Generation Computers
              </Dropdown.Item></a>
              <a href="#Fourth">
                <Dropdown.Item>
                Fourth Generation Computers
              </Dropdown.Item></a>

              <a href="#Fifth">
                <Dropdown.Item>
                Fifth Generation Computers
              </Dropdown.Item></a>
            </Dropdown>


            {/* <a className="sm:mr-4 sm:p-2 sm:hover:p-2 sm:hover:bg-blue-500 sm:hover:rounded-xl sm:hover:text-white md:mr-5 md:p-2 md:opacity-100  md:hover:p-3 md:hover:bg-blue-500 md:hover:rounded-xl md:hover:text-white lg:mr-5 lg:p-3 lg:opacity-100 lg:hover:p-3 lg:hover:bg-blue-500 lg:hover:rounded-xl lg:text-inherit md:text-white sm:text-white lg:text-white lg:hover:text-white">Login</a> */}
            {/* <a className="sm:mr-4 sm:p-2 sm:hover:p-2 sm:hover:bg-blue-500 sm:hover:rounded-xl sm:hover:text-white md:mr-5 md:p-2 md:opacity-100  md:hover:p-3 md:hover:bg-blue-500 md:hover:rounded-xl md:hover:text-white lg:mr-5 lg:p-3 lg:opacity-100 lg:hover:p-3 lg:hover:bg-blue-500 lg:hover:rounded-xl lg:hover:text-white"><CartIcon/></a> */}
          </nav>
        </div></header>  </>
  )
}
