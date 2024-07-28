"use client"
import Image from 'next/image'
import { signIn } from 'next-auth/react'

export default function SignInBtn() {
  return (
    <button onClick={()=>signIn("google")} className='flex items-center justify-center gap-4 rounded-lg'>
        <Image width={30} height={30} src={'/google-logo.png'} alt='google-logo'/>
        <span className='bg-blue-500 text-white px-4 py-3'>Sign in with Google</span>
    </button>
  )
}
