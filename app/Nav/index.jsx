import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className='h-12 w-full bg-black flex justify-between '>
        <img className='h-2/4 w-1/5  object-contain mt-2' src="https://www.villainsverse.com/img/logo.svg" alt="" />
       
           <button className=' h-6 mt-2 mr-4 text-xs bg-white text-black font-bold py-1 px-4 rounded-full'><Link href="/Search">Search</Link></button> 
    </div>
  )
}

export default Nav