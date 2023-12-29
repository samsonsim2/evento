import Link from 'next/link';
import React from 'react'
 
const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All events",
    path: "/events/all",
  },
];

const Footer = () => {
  return (
    <div className='mt-auto flex justify-between items-center h-16 px-3 sm:px-9 text-xs text-white/25 border-t border-white/50'>
      <small className='text-xs'>copyright 2060 Bytegrad</small>
      <ul className='flex gap-x-3 sm:gap-x-8'>
      {routes.map((route)=>{
        return (
        <li>
          <Link key={route.name} href={route.path}>{route.name}</Link>
        </li>
        )
      })}
      </ul>
    </div>
  )
}

export default Footer
