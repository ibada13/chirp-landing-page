import Image from "next/image";
import HeroImageDesktop from "@/app/components/Assets/hero-image-desktop.png";
import HeroImageMobile from "@/app/components/Assets/hero-image-mobile.png";
import { CiDark, CiSun } from "react-icons/ci";
import { Button } from "./ui/button";
import { BsArrowRight } from "react-icons/bs";
import { clients } from "./lib/data";
import Nav from "./NavBar";
import { useEffect, useState } from "react";

export default function Home() { 
    const [theme, setTheme] = useState('light');

    useEffect(() => {
      const storedTheme = localStorage.getItem('theme');
      const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
      if (storedTheme) {
        setTheme(storedTheme);
        document.body.classList.add(storedTheme);
      } else if (userPrefersDark) {
        setTheme('dark');
        document.body.classList.add('dark');
      } else {
        document.body.classList.add('light');
      }
    }, []);
  
    const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      document.body.classList.remove(theme);
      document.body.classList.add(newTheme);
      localStorage.setItem('theme', newTheme);
    };
  
    return (
        <div className="h-auto w-screen flex flex-col items-center bg-home transition-colors duration-300">
            <button 
                onClick={toggleTheme} 
                className="fixed top-5 right-5 p-3 rounded-full bg-gray-200 dark:bg-gray-800 shadow-lg transition-all duration-300 hover:scale-110"
            >
                {theme === "dark" 
                    ? <CiSun size={30} className="text-amber-300" /> 
                    : <CiDark size={30} className="text-purple-400" />}
            </button>

            <Nav />

            <div className="w-4/5 flex md:flex-row flex-col-reverse h-auto mt-10 gap-10 mb-10 bg-home">
                <div className="w-full md:w-3/5 flex flex-col h-auto gap-y-5 p-1">
                    <div>
                        <p className="font-bold text-5xl"> 
                            Twitter analytics taken to a whole new level.
                        </p>
                    </div>
                    <div>
                        <p className="text-sm text-wrap m-2">
                            Gain deeper insights into your audience, track engagement trends, and optimize your Twitter strategy with advanced analytics and scheduling tools.
                        </p>
                    </div>
                    <div className="flex items-center gap-x-4 font-medium">
                        <Button />
                        <div className="flex items-center text-blue-300 text-lg gap-x-2">
                            <p>Learn more</p>
                            <BsArrowRight size={25} className="mt-[2px]" />
                        </div>
                    </div>
                    <div className="flex ml-5">
                        {clients.map((client, i) => (
                            <Image key={`client-${i}`} className="-ml-5" src={client} alt={`picture of client number ${i}`} />
                        ))}
                    </div>
                    <div className="ml-2">
                        <p>
                            Join <span className="text-blue-400">195</span> others who have analyzed their followers and scheduled <span className="text-blue-400">1342</span> tweets!
                        </p>
                    </div>
                </div>

                <div className="flex-1 flex">
                    <Image layout="responsive" className="h-full w-full md:block hidden" alt="hero-image" src={HeroImageDesktop} />
                    <Image layout="responsive" className="h-full w-full md:hidden block" alt="hero-image" src={HeroImageMobile} />
                </div>
            </div>
        </div>
    );
}
