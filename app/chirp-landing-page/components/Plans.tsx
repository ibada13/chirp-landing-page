import PlanCard from "./ui/PlanCard";

export default function Plans() {
    return (
        <div className="flex flex-col items-center justify-center mt-10 gap-y-10 md:w-4/5 w-full mb-10">
            <div className="flex flex-col justify-between flex-grow gap-y-4">
                <div>
                    <p className="text-4xl text-center">One simple price plan</p>
        </div>
                <div>
                    <p className="text-sm text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, libero!</p>
                </div>
        </div>
                <PlanCard />
                     

        </div>
        
    );
 }