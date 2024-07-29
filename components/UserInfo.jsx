"use client"
import SignInBtn from "./SignInBtn";
import {useSession} from "next-auth/react"
import Image from "next/image";


export default function UserInfo() {
  const {status, data:session} = useSession()
  if(status === "authenticated"){
     return (
      <div className="flex flex-col p-8 shadow-xl gap-3 rounded-md bg-orange-200">
        <Image className="rounded-full" alt="user profile" src={session?.user?.image} width={60} height={60}/>
        <div>
          Name: <span className="font-bold">
            {session?.user?.name}
          </span>
        </div>
        <div>
          Email: <span className="font-bold">
            {session?.user?.email}
          </span>
        </div>
      </div>
     )
  }else{
    return (
      <div>
          <SignInBtn/>
      </div>
    )
  }
 
}
