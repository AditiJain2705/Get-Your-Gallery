"use client"
import axios from 'axios';
import Link from 'next/link';
import styles from './style.module.css'
import React, { useState } from 'react'

const page = () => {
  const [usersearch, setusersearch] = useState("")
    const [first, setfirst] = useState([]);
    const SearchHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.get(
                `https://api.unsplash.com/search/photos?client_id=Cjg971k-TOJCHGcnCsd4G-Fnk92KMy2Z03E1eNolX58&page=1&query=${usersearch}`
               
            );
            setfirst(data);
          setusersearch("");
        }
        catch (err) {
            console.log(err);
        }
    }
console.log(first);
    let searchi = <img className="ml-52 mt-5 h-2/5 w-2/5" src="https://cdn.dribbble.com/users/2043038/screenshots/4488715/girl_waiting.gif" alt="" />

    if(first?.results?.length){
        searchi = first.results.map((val, index)=>(
          
            <div className={styles.card1}  key={index}>
              <ul >
                <li className='h-1/4 overflow-hidden'><img className='h-1/4 w-3/5 object-cover overflow-hidden rounded-md' src={val?.links?.download} alt="" /></li>
              
              </ul>
              
              
              
            </div>
        ))
    }


               
    return (
        <div className='text-center items-center' >
            <h1 className='text-2xl mt-2'>Lets Search</h1>
            <form onSubmit={SearchHandler}>
              <input className=' h-6 w-44 text-xs rounded-md  bg-neutral-200 text-black'type="text"  value={usersearch} onChange={(e)=>{setusersearch(e.target.value)}} />
              <button className=' h-6 mt-5 ml-6 text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full'>Search</button>
              <button> <Link className='ml-2 h-6 mt-5  text-xs bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-4 rounded-full' href='/'>Back</Link>   </button>
            </form>

           
            
            {searchi}

        </div>
    )
}

export default page