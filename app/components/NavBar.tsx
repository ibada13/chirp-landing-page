'use client';
import { useState } from 'react';
import Link from "next/link";
import { Button } from "./ui/button";
import { BsList } from "react-icons/bs";
import Logo from "./ui/logo";
import { IoIosCloseCircleOutline } from "react-icons/io";
const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <div className="flex w-4/5 mt-12 relative bg-home "> 
            <div className="flex-grow basis-auto md:basis-full">
                <Logo />
            </div>
            <div className="flex-grow basis-auto md:basis-full hidden sm:flex justify-between items-center gap-x-2">
                <Link className='hover:text-twitter transition-all duration-300' href="">Home</Link>
                <Link className='hover:text-twitter transition-all duration-300' href="">Pricing</Link>
                <Link className='hover:text-twitter transition-all duration-300' href="">FAQ</Link>
                <Button />
            </div>
            <button className="sm:hidden block" onClick={toggleMenu}>
               {isMenuOpen? <IoIosCloseCircleOutline size={35} color='#ff0000'/>:<BsList className='text-twitter' size={35} />}
            </button>

            {/* Mobile Menu - Conditional Rendering */}
            {isMenuOpen && (
                <div className="sm:hidden flex flex-col items-center gap-y-4 absolute  top-full left-0 w-full bg-white text-gray-400  shadow-lg p-4 transition-all duration-300"> {/* Add padding for aesthetics */}
                    <Link className='hover:text-twitter transition-all duration-300' href="">Home</Link>
                    <Link className='hover:text-twitter transition-all duration-300' href="">Pricing</Link>
                    <Link className='hover:text-twitter transition-all duration-300' href="">FAQ</Link>
                </div>
            )}
        </div>
    );
}

export default Nav;
