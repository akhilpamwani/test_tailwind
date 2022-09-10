import React, { useState } from 'react'
// import { CartIcon } from '../../../assets/styles/styles'
// import  Logo  from "../../../assets/img/Logo.svg";
// import '../../../assets/styles/styles.css';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';

export const SmallBar = () => {
    const [state, setState] = useState(false)
    return (
        <>
            <header className={state ? " h-screen  bg-slate-900 shadow-lg transition-all duration-1000 shadow-blue-500 opacity-100  fixed w-full z-50  lg:opacity-0 lg:transition-all lg:duration-75 md:opacity-0 md:transition-all md:duration-75 top-0 sm:opacity-0 sm:transition-all sm:duration-75" : "top-0 h-32  fixed w-full z-50 bg-slate-900 sm:transition-all sm:duration-75 md:transition-all md:duration-75 lg:transition-all lg:duration-75 shadow-lg shadow-grey-500 opacity-100  lg:opacity-0 md:opacity-0 sm:opacity-0 transition-all duration-1000"}>
                <div className=" mx-auto flex    flex-row items-center">
                    <a className="flex  font-medium absolute top-16 left-5  text-white  mb-0">
                      
                    History Of Computers

                    </a>
                    <nav className={state ? "flex font-medium   flex-col text-center absolute top-20 right-1/3    items-center  text-lg justify-center transition-all duration-1000" : "opacity-0 flex font-medium   flex-col text-center absolute top-40 right-1/3    items-center  text-lg justify-center transition-all duration-500 "}>
                        {/* <a href='#computer' className="mr-1 p-1 hover:p-1 text-white hover:bg-blue-500 hover:rounded-xl hover:text-white    " onClick={() => setState(!state)}>Computer</a> */}
                        <a  href='#Abacus' className="mr-1 p-1 hover:p-1 text-white hover:bg-blue-500 hover:rounded-xl hover:text-white    " onClick={() => setState(!state)}>Abacus</a>
                        <a href='#Napier' className="mr-1 p-1 hover:p-1 text-white hover:bg-blue-500 hover:rounded-xl hover:text-white    " onClick={() => setState(!state)}>Napier's Bones</a>
                        <a href='#Pascaline' className="mr-1 p-1 hover:p-1 text-white hover:bg-blue-500 hover:rounded-xl hover:text-white    " onClick={() => setState(!state)}>Pascaline</a>
                        <a href='#Stepped' className="mr-1 p-1 hover:p-1 text-white hover:bg-blue-500 hover:rounded-xl hover:text-white    " onClick={() => setState(!state)}>Stepped Reckoner</a>
                        <a href='#Difference' className="mr-1 p-1 hover:p-1 text-white hover:bg-blue-500 hover:rounded-xl hover:text-white    " onClick={() => setState(!state)}>Difference Engine</a>
                        <a href='#Analytical' className="mr-1 p-1 hover:p-1 text-white hover:bg-blue-500 hover:rounded-xl hover:text-white    " onClick={() => setState(!state)}>Analytical Engine</a>
                        <a href='#Tabulating' className="mr-1 p-1 hover:p-1 text-white hover:bg-blue-500 hover:rounded-xl hover:text-white    " onClick={() => setState(!state)}>Tabulating Machine</a>
                        <a href='#Differential' className="mr-1 p-1 hover:p-1 text-white hover:bg-blue-500 hover:rounded-xl hover:text-white    " onClick={() => setState(!state)}>Differential Analyzer</a>
                        <a  href='#Mark' className="mr-1 p-1 hover:p-1 text-white hover:bg-blue-500 hover:rounded-xl hover:text-white    " onClick={() => setState(!state)}>Mark I</a>
                        <a href='#First' className="mr-1 p-1 hover:p-1 text-white hover:bg-blue-500 hover:rounded-xl hover:text-white    " onClick={() => setState(!state)}>First Generation </a>
                        <a  href='#Second' className="mr-1 p-1 hover:p-1 text-white hover:bg-blue-500 hover:rounded-xl hover:text-white    " onClick={() => setState(!state)}>Second Generation </a>
                        <a href='#Third' className="mr-1 p-1 hover:p-1 text-white hover:bg-blue-500 hover:rounded-xl hover:text-white    " onClick={() => setState(!state)}>Third Generation </a>
                        <a href='#Fourth' className="mr-1 p-1 hover:p-1 text-white hover:bg-blue-500 hover:rounded-xl hover:text-white    " onClick={() => setState(!state)}>Fourth  Generation </a>
                        <a href='#Fifth' className="mr-1 p-1 hover:p-1 text-white hover:bg-blue-500 hover:rounded-xl hover:text-white    " onClick={() => setState(!state)}>Fifth  Generation </a>



                    </nav>


                    <div className='text-white p-3 m-auto absolute top-14 right-4  rounded-3xl left-auto hover:bg-blue-500  hover:text-white hover:p-2 mr-10 '>
                        {
                            state ?

                                <CloseSharpIcon onClick={() => setState(!state)} />
                                :
                                <MenuSharpIcon onClick={() => setState(!state)} />
                        }
                    </div>
                </div>
            </header>


        </>
    )
}
