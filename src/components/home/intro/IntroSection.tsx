'use client';
import { Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const IntroSection = () => {
  return (
    <div className='grid grid-cols-1 
        lg:grid-cols-2 p-10 '>
        <div className='flex flex-col gap-3 m-auto lg:w-[90%] self-center'>
            <div className='flex flex-row gap-5'>
                <Link href={ "https://github.com/realejandro" } target="_blank">
                    <FaGithub className="w-7 h-7 hover:scale-110 transition" />
                </Link>

                <Link href={"https://www.linkedin.com/in/alejcabrera07/"} target="_blank">
                    <FaLinkedin className="w-7 h-7 hover:scale-110 transition" />
                </Link>
                <Link href={'/'}>
                    <Mail className="w-7 h-7 hover:scale-110 transition" />
                </Link>
            </div>
            <h1 className='text-5xl'>Discover Chicago Beyond the Headlines</h1>
            <span className='text-base'>
                {"Hi! Welcome to ChiScope—your guide to living, working, and thriving in Chicago. We share practical insights on jobs, housing, neighborhoods, cost of living, public safety, local opportunities, and the resources that help you make informed decisions about life in the city"}.
            </span>
        </div>
        <div className='flex justify-center mt-10'>
            <figure className='relative w-full lg:w-[90%] h-[40vh]'>
                 <Image
                    src={'/assets/images/intro/chicago.avif'}
                    alt="Chicago city"
                    fill
                    style={{ objectFit: "cover"}}
                    unoptimized={true}
                />
            </figure>
        </div>
    </div>
  )
}
