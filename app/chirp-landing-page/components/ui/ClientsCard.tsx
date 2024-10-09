import Image from "next/image";
import { clientReview } from "../lib/data";
import { BsTwitter } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";
export default function ClientsCard({ ClientReview }: {ClientReview:clientReview}) { 
    return (
        <div className="flex flex-col gap-4 border  border-purple-300 p-4 rounded-md w-full self-start flex-grow">
            <div className="flex justify-between gap-x-4 flex-grow">
                <div className="flex-grow flex gap-x-2">
                    <Image src={ClientReview.pfpSrc} alt={`${ClientReview.name} picture's`} />
                    <div className="flex flex-col items-center">
                        <p className="text-md font-bold">{ClientReview.name}</p>
                        <p className="text-sm">{ClientReview.username}</p>
                    </div>
                </div>
                <div className="flex-grow flex justify-end items-center ">
                    <BsTwitter color="#1DA1F2" size={25}/>
                </div>

            </div>
            <div className="flex-grow">
                <p className="text-sm">
                    {ClientReview.review}
            </p>

            </div>
            <div className="flex justify-between items-center flex-grow  ">
                <p className="flex gap-1 items-center">
                    <BiHeart color="red" size={25}/>
                    {ClientReview.likes}
                </p>
                <p>
                    { ClientReview.date}
            </p>

            </div>

        </div>
    );
} 