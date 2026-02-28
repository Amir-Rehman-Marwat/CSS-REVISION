import React from 'react'
import { Github } from 'lucide-react';
import { FaGoogle } from "react-icons/fa";
function App() {
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center "  >
      <form className=' bg-[#7C74C5] hover:bg-blue-500  w-[400px] h-[700px] flex flex-col items-center justify-between  gap-4 border-none rounded-3xl relative '   >
        <h3 className=' text-white font-extrabold  text-2xl relative top-5 '>WELCOME BACK</h3>
        <p className='font-light text-white relative top-3'>Sign in to your account</p>
        <input className=  "focus:bg-white bg-blue-300 border-none  bg-amber-100  flex items-center rounded-2xl relative top-5 w-70 h-9 pl-6  " type="text" placeholder='name'/>
        <input className=' focus:bg-white bg-blue-300 border-none bg-amber-100 pl-6 rounded-2xl relative top-5 w-70 h-9' type="password" name="" id="" placeholder='password'/>
        <input className="  absolute  top-73 left-17 focus:bg-amber-300"type="checkbox" name="" id="" />
        <span className='inline font-light text-white relative top-5 right-14 '>Remember me</span>
        <a className='text-white font-light
         absolute right-5 top-71' href="">Forget  password?</a>
        <button className='w-[300px] h-[50px]   text-white font-bold rounded-2xl relative top-9 bg-[#4EA6D4]'>Sign In</button>
       <div className='bg-white w-23 h-0.5 absolute right-10 top-108'></div> 
       <div className='bg-white w-23 h-0.5 absolute left-10 top-108' ></div> 
       <span className='relative top-3'>Or continue with</span>
       
        <button className='bg-[#4EA6D4]  font-bold text-white w-[150px] h-[40px] rounded-lg flex justify-center items-center'><FaGoogle className='relative right-2' /> Google</button>
        <button className=' active:invisible bg-[#4EA6D4]  font-bold text-white w-[150px] h-[40px] rounded-lg flex justify-evenly  items-center'> <Github   className='relative left-1'/> <span className='relative right-3'>Git hub</span></button>
<span>Dont't have an account?</span> <a className='font-light text-white relative bottom-6 underline' href="">Sign up</a>
      </form>
    </div> 
  )
}

export default App