import Image from "next/image"
import HeroImage from '@/app/chirp-landing-page/components/Assets/hero-image-desktop.png'
import { Button } from "./ui/button"
import { BsArrowRight } from "react-icons/bs"
import user1 from './Assets/user-1.svg'
import user2 from './Assets/user-2.svg'
import user3 from './Assets/user-3.svg'
import user4 from './Assets/user-4.svg'
import user5 from './Assets/user-5.svg'
import user6 from './Assets/user-6.svg'
import user7 from './Assets/user-7.svg'
import user8 from './Assets/user-8.svg'
import user9 from './Assets/user-9.svg'

export default function Home() { 
    return (
        <div className="w-4/5 flex h-auto mt-10 gap-x-10 mb-10">
            <div className="w-3/5  flex flex-col h-auto  gap-y-5 p-l  flex-grow" >
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
                    <Image className="-ml-5" src={user1} alt="user1"/>
                    <Image className="-ml-5" src={user2} alt="user2"/>
                    <Image className="-ml-5" src={user3} alt="user3"/>
                    <Image className="-ml-5" src={user4} alt="user4"/>
                    <Image className="-ml-5" src={user5} alt="user5"/>
                    <Image className="-ml-5" src={user6} alt="user6"/>
                    <Image className="-ml-5" src={user7} alt="user7"/>
                    <Image className="-ml-5" src={user8} alt="user8"/>
                    <Image className="-ml-5" src={user9} alt="user9"/>

                </div>
                <div className="ml-2">
                    <p>

                    join <span className="text-blue-400 ">195</span> others who have analyzed their followers and scheduled <span className="text-blue-400">1342</span> tweets!
                    </p>
                </div>

            </div>
            <div className="bg-green-500 w-2/5">
                <Image className="h-full" alt="hero-image" src={HeroImage} />

            </div>

        </div>
    )
}