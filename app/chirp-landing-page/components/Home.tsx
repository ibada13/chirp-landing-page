import Image from "next/image"
import HeroImageDesktop from '@/app/chirp-landing-page/components/Assets/hero-image-desktop.png'
import HeroImageMobile from '@/app/chirp-landing-page/components/Assets/hero-image-mobile.png'

import { Button } from "./ui/button"
import { BsArrowRight } from "react-icons/bs"
import { clients } from "./lib/data"
export default function Home() { 
    return (
        <div className="w-4/5 flex md:flex-row flex-col-reverse h-auto mt-10 gap-10 mb-10 bg-home">
            <div className="w-full md:w-3/5  flex flex-col h-auto  gap-y-5 p-1" >
                <div>
                    <p className="font-bold text-5xl"> 
                        Twitter analytic take to the whole new level .
                    </p>
                </div>
                <div className="">
                    <p className="text-sm  text-wrap m-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ab vitae veniam provident fugiat iste earum dicta, in cum aliquam.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum saepe placeat cum adipisci illum dicta eveniet id officiis sequi ducimus!
                    </p>
                </div>
                <div className=" flex items-center gap-x-4 font-medium">
                    <Button />
                    <div className="flex items-center text-blue-300 text-lg gap-x-2">

                    <p className=" ">
                        Learn more
                    </p>
                        <BsArrowRight size={25} className="mt-[2px]"/>
                    </div>
                </div>
                <div className="flex ml-5">
                    {clients.map((client, i) => (
                        <Image key={`client-${i}`} className="-ml-5" src={client} alt={`picture of client number ${i}`} />
                    ))
                    }


                </div>
                <div className="ml-2">
                    <p>

                    join <span className="text-blue-400 ">195</span> others who have analyzed their followers and scheduled <span className="text-blue-400">1342</span> tweets!
                    </p>
                </div>

            </div>
            <div className="bg-green-500 flex-1 flex ">
                { /* */}
                <Image layout="responsive" className="h-full w-full md:block hidden" alt="hero-image" src={HeroImageDesktop} />
                { /* */}
                <Image layout="responsive" className="h-full w-full md:hidden block" alt="hero-image" src={HeroImageMobile} />


            </div>

        </div>
    )
}