import Image from "next/image";
import { BookSearch } from "./components/BookSearch";

export default async function Home() {


  return (
    <div className="h-screen w-full">
      <div className="absolute top-0 right-0 bg-gray-600 px-8">
        <div className="flex flex-row gap-2">
          
        </div>
      </div>
      <div className="flex flex-col justify-center h-full items-center gap-4">
      <BookSearch />

        {/* <span className="text-3xl font-semibold tracking-wider ">
          Minerva
        </span> */}
        {/* <SignInButton /> */}
      </div>
    </div>
  );
}
