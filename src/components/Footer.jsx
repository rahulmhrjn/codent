import React from 'react'
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-[#0e4240] text-white px-4 sm:px-6 py-8">
  <div className="max-w-6xl mx-auto">
    {/* Section Title */}
    <div className="flex items-center space-x-2 text-sm uppercase font-semibold">
      <ArrowRight size={16} />
      <span>Message from Chairman</span>
    </div>

    {/* Heading & Description Container */}
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-2">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold">
        Know more about our
      </h2>

      {/* Description */}
      <p className="mt-4 lg:mt-0 text-xs sm:text-sm text-gray-300 max-w-3xl">
        National Medical College was established in the year 2001, promoted by
        the “National Medical College Company Pvt. Ltd.” under the Chairmanship
        of Prof. Dr. Jainuddin Ansari, an outstanding surgeon who has earned
        national and international recognition.
      </p>
    </div>
  </div>
</div>
  )
}

export default Footer