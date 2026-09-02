'use client'
import Image from 'next/image'
import React from 'react'

export const SectionTotal = () => {
  return (
    <div className="grid w-[100%] flex-column grid-cols-1 
        lg:grid-cols-[70%_30%] lg:w-[90%] lg:flex-row justify-center self-center m-auto mt-10">
        <div className="flex w-full">
            <div className="relative w-[100%] h-[50vh] lg:h-[75vh]">
                <Image
                    src="/assets/images/total/chicago_opportunities.jpg"
                    alt="info"
                    fill
                />
            </div> 
        </div>
        
        <div className="flex w-full">
            <div className="flex flex-col w-full justify-center bg-zinc-100 p-10">
                <h2 className="text-3xl">Opportunities in the City</h2>
                <div className="divider w-[5.25%]"/>
                <p> Chicago is full of opportunity—from growing job markets to affordable neighborhoods on the rise. Chicagoverse helps you find and make the most of them.</p>
                <div className='flex mt-10'>
                    <button className="btn btn-wide bg-[#91A488] w-50 text-white hover:bg-[#ffffff] hover:text-[#91A488]" >
                        LATEST POSTS
                    </button>
                </div>                
            </div>
        </div>
    </div>
  )
}

