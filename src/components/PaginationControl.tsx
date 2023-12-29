import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'
type PaginationControlProps = {
   previousPath :string,
   nextPath : string
}
const btnStyles = "text-white px-5 py-3 bg-white/5 rouded-md opacity-75 hover:opacity-100 transition text-sm"
const PaginationControl = ({previousPath,nextPath}:PaginationControlProps) => {
    
  return (
    <section className="w-full flex  justify-between">
        {previousPath? <Link 
        href={previousPath}
        className={btnStyles} > 
        <ArrowLeftIcon/>
        Previous
        </Link>: <div/>}
        
        
        { nextPath &&   <Link 
        href={nextPath}
        className={btnStyles}> 
        <ArrowRightIcon/>
        Next
        </Link>}
       
     
     
      
    </section>
  )
}

export default PaginationControl
