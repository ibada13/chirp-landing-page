import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="h-screen w-screen flex">
      <div className="bg-red-500 w-1/3  flex justify-center items-center">
        <p className="text-2xl uppercase text-center">Well code projects</p>
      </div>
      <div className="bg-black flex-grow basis-full flex flex-col items-center justify-center gap-4">
        <Link href="/chirp-landing-page">chrip-landing-page</Link>
        <Link href="">chrip-landing-page</Link>
        <Link href="">chrip-landing-page</Link>
        <Link href="">chrip-landing-page</Link>


      </div>
    </div>
  );
}
