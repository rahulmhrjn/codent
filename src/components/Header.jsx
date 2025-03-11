import { ChevronDown } from "lucide-react";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { GiUsaFlag } from "react-icons/gi";

const Header = () => {

  return (
    <div className="bg-[#183a3b] text-white text-xs px-4 sm:px-6 py-2 flex flex-wrap items-center justify-between">
  {/* Left Section */}
  <div className="flex flex-wrap items-center space-x-2 sm:space-x-4">
    <span className="flex items-center space-x-1">
      <MdOutlinePhoneInTalk />
      <span>Govt-Program Helpline: 051-591101</span>
    </span>
    <span className="hidden sm:block border-l border-gray-600 pl-4">
      Emergency: 051-591014, 591320
    </span>
  </div>

  {/* Right Section (Unchanged User Management) */}
  <div className="flex flex-wrap items-center space-x-4 sm:mt-0">
      {/* User Management Dropdown (Kept Unchanged) */}
      <span className="flex items-center space-x-1">
        <span>User Management</span>
        <ChevronDown size={16} />
      </span>
    </div>

    {/* Language Switcher & User Avatar */}
    <div className="flex items-center space-x-2">
      <div className="flex space-x-1 cursor-pointer">
        <GiUsaFlag size={16} />
        <span>EN</span>
        <ChevronDown size={16} />
      </div>

      {/* User Avatar */}
      <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white">
        S
      </div>
    </div>
  
</div>
  )
}

export default Header