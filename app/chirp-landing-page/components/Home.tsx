import Image from "next/image"
import HeroImage from '@/app/chirp-landing-page/components/Assets/hero-image-desktop.png'
import { Button } from "./ui/button"
import { BsArrowRight } from "react-icons/bs"
export default function Home() { 
    return (
        <div className=" w-4/5 flex min-h-screen mt-10 gap-x-10">
            <div className="bg-red-500 w-3/5  h-full flex flex-col justify-between">
                <div>
                    <p className="font-bold text-4xl"> 
                        Twitter analytic take to the whole new level
                    </p>
                </div>
                <div className="bg-blue-500">
                    <p className="text-sm  text-wrap">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ab vitae veniam provident fugiat iste earum dicta, in cum aliquam.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum saepe placeat cum adipisci illum dicta eveniet id officiis sequi ducimus!
                    </p>
                </div>
                <div className=" flex">
                    <Button />
                    <p className="tetx-sm text-blue-400 flex">learn more <BsArrowRight /></p>
                </div>
                <div></div>

            </div>
            <div className="bg-green-500 w-2/5 ">
                <Image className="h-full" alt="hero-image" src={HeroImage} />

            </div>

        </div>
    )
}