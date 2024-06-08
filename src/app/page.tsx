import Image from "next/image";
import { SignInButton } from "./api/(auth)/auth";
import { auth } from "./auth";

export default async function Home() {
  const session = await auth()
  session?.user && console.log(session)


  return (
    <div className="h-screen w-full">
      <div className="absolute top-0 right-0 bg-gray-600 px-8">
        <div className="flex flex-row gap-2">
          {session?.user?.image && <Image className="w-8 h-8 rounded-full" width={15} height={15} src={session.user.image} alt="profile" />}

          {session?.user && session?.user.name}
        </div>
      </div>
      <div className="flex flex-col justify-center h-full items-center gap-4">
        <span className="text-3xl font-semibold tracking-wider ">
          Minerva
        </span>
        <SignInButton />


      </div>
    </div>
  );
}
