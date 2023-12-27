'use client'
 
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
 
export default function Searchform() {

  const [searchText, setSearchText] =useState("")
  const router = useRouter()


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()    

    router.push(`events/${searchText}`)
  }
  return (
    <form  onSubmit ={handleSubmit} className="w-full sm:w-[580px]">
    <input
      onChange={(e)=> setSearchText(e.target.value)}
      className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none"
      placeholder="Search events in any city"
    ></input>
  </form>
  )
}
 