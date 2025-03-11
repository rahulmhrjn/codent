import React from 'react'
import { Menu, ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex gap-2 items-center justify-center w-full mt-4">
      <nav className="flex items-center justify-between bg-white rounded-full shadow-lg w-full max-w-6xl overflow-hidden pl-4 border-2">
        {/* Left Side - Logo & Menu Button */}
        <div className="flex items-center gap-4 h-full ">
          <button className="">
            <Menu size={24} />
          </button>
          <img src="https://nmcbir.edu.np/frontend/images/logo.png" alt="National Medical College" className="h-8" />
        </div>

        {/* Center - Navigation Links */}
        <ul className="hidden md:flex gap-6 font-medium mb-0 mt-0 items-center">
          <li className="relative group cursor-pointer flex items-center gap-1">
            Academic <ChevronDown size={16} />
          </li>
          <li className="relative group cursor-pointer flex items-center gap-1">
            Research <ChevronDown size={16} />
          </li>
          <li className="relative group cursor-pointer flex items-center gap-1">
            News <ChevronDown size={16} />
          </li>
          <li className="relative group cursor-pointer flex items-center gap-1">
            CPD <ChevronDown size={16} />
          </li>
        </ul>

        {/* Right Side - Buttons */}
        <div className="flex items-center">
            <div className='flex items-center bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 shadow-md hover:from-green-600 hover:to-teal-600'>
            <button className="flex items-center">
              Join Us Now 
            </button>
            </div>
            <div className='flex items-center bg-[#2596be] text-white px-4 py-2 rounded-br-[30px] rounded-tr-[30px]'>
            <button className="px-4 flex items-center gap-2">
              Exam Result
            </button>
            </div>
          </div>
      </nav>
      {/* Hospital Button Outside Navbar on the Right Side */}
      <div className='rounded-full overflow-hidden border-2'>
      <button className="bg-[#2596be] text-white px-4 py-2 shadow-md">
        Hospital
      </button>
      </div>
    </div>
  )
}

export default Navbar