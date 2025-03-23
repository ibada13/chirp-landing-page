import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Button } from "./button";
export default function PlanCard() { 
    return (
        <div className="flex-grow flex flex-col bg-red gap-y-6  sm:w-1/2 bg-plan    p-8 rounded-lg border border-plan_border mb-10">
        <div className="flex flex-col gap-y-2">
            <p className="font-light">Monthly</p>
            <p className="text-5xl font-bold flex gap-x-1 items-end text-plan_border">$9<span className="text-lg font-light text-white">/mo</span></p>
            </div>
            
        <hr className="w-full mx-auto border-t border-plan_border"/>
        <div className="flex flex-col justify-evenly">
            <p className="flex gap-x-2 text-lg items-center"><IoMdCheckmarkCircleOutline color="#00ff00"/> Lorem ipsum dolor sit amet.</p>
            <p className="flex gap-x-2 text-lg items-center"><IoMdCheckmarkCircleOutline color="#00ff00"/> Lorem ipsum dolor sit amet.</p>
            <p className="flex gap-x-2 text-lg items-center"><IoMdCheckmarkCircleOutline color="#00ff00"/> Lorem ipsum dolor sit amet.</p>

        </div>
        <hr className="w-full mx-auto border-t border-plan_border"/>

        <div className="flex justify-center items-center w-full mb-5">
            <Button className="w-full " content="Start Trail With Twitter" />
        </div>
</div>

    );
}