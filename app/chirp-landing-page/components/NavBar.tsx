'use client';
import Link from "next/link";
import { Button } from "./ui/button";
import Logo from "./ui/logo";
const Nav = () => {
    return (
        <div className="flex w-4/5 mt-12 ">
            <div className="flex-grow basis-auto md:basis-full ">
                <Logo />
            </div>
            <div className="flex-grow basis-auto md:basis-full flex justify-between items-center gap-x-2 ">
                <Link href="">Home</Link>
                <Link href="">Pricing</Link>
                <Link href="">FAQ</Link>
                <Button />
            </div>
        </div>
    )
 }


export default Nav