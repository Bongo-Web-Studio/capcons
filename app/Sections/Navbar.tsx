import React from 'react'

export default function Navbar() {
  return (
     <nav className="absolute top-2 left-0 right-0 z-30 flex items-center justify-between px-6 sm:px-16">
        <div className="flex items-center gap-4">
          <div className="text-xl font-bold text-[#0f172a]">
            <img src="./logo.png" alt="" />
          </div>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-lg text-black  font-medium">
          <li>Features</li>
          <li>Resources</li>
          <li>Pricing</li>
        </ul>

        <div className="flex items-center gap-4">
          <button className=" hidden sm:inline  font-medium  text-black text-lg">Log in</button>
          <button     style={{
                  background:
                    "linear-gradient(180deg, #D8FF2A 0%, #B6E300 100%)",
                  boxShadow: "0 6px 16px rgba(56, 201, 0, 0.12)",
                }} className="px-5 py-2 rounded-full text-lg font-medium bg-[#ceff3f] text-black">
            Sign up
          </button>
        </div>
      </nav>
  )
}
