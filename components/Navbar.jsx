"use client"
import Link from "next/link";
import {signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const {status} = useSession()
  return (
    status === "authenticated" ? (
      <div className="flex justify-between items-center shadow-md p-4">
      <Link className="text-blue-700 text-lg font-bold" href='/'>SteveAuth</Link>
      <button onClick={()=>signOut()} className="py-2 px-4 rounded-md bg-slate-900 text-white">Sign Out</button>
  </div>
    ) : (
      <div className="flex justify-between items-center shadow-md p-4">
        <Link className="text-blue-700 text-lg font-bold" href='/'>SteveAuth</Link>
        <button onClick={()=>signIn("google")} className="py-2 px-4 rounded-md bg-slate-900 text-white">Sign In</button>
    </div>
    )
  
    
  )
}
