import UserInfo from "@/components/UserInfo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <UserInfo/>
    </div>
  );
}
