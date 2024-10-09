import ClientsCard from "./ui/ClientsCard";
import { clientReviews } from "./lib/data";
const Clients = () => {
    return (
        <div className="w-4/5 flex flex-col gap-y-10 mb-5  mt-10">
            <div className='w-2/5  mt-6 mb-6'>
            <p className='text-2xl font-bold'>What our customers say :</p>
            </div>
            <div className="flex  gap-3  justify-evenly">
                {clientReviews.map((review, i) => (
                    <ClientsCard ClientReview={review} key={`review-${i}`}/>
                ))}
            </div>

        </div>
    );
 }



export default Clients