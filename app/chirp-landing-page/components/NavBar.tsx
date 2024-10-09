'use client';
import Link from "next/link";
import { Button } from "./ui/button";
const Nav = () => {
    return (
        <div className="flex w-4/5 mt-12 ">
            <div className="flex-grow basis-full ">
                <Link href="/chirp-landing-page">
                    <p className="bg text-2xl text-blue-500 ">
                        chirp.
                    </p>
                </Link>
            </div>
            <div className="flex-grow basis-full flex justify-between items-center ">
                <Link href="">Home</Link>
                <Link href="">Pricing</Link>
                <Link href="">FAQ</Link>
                <Button />
            </div>
        </div>
    )
 }


export default Nav