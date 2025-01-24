import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-red-400 text-white p-4 ">
        <div className='container mx-auto flex items center justify-between'>
            <div className='text-2xl font -bold'>
                <a className="" href="/">Nutri Nudge</a>
            </div>
        
        <div className='flex space-x-4 ml-auto'>
      
                <a href="/Profile">Profile </a>
            
                <a href="/About">About </a>
            
                <a href="/Contact">Contact Us </a>
          
        </div>
        </div>
    </nav>
  )
}

export default Navbar