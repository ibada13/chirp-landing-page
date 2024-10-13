import ClientsCard from "./ui/ClientsCard";
import { clientReviews } from "./lib/data";
const Clients = () => {
    return (
        <div className="flex minh-screen w-screen bg-clients justify-center items-center">

        <div className="w-4/5 flex flex-col gap-y-10 mb-5  mt-10 ">
            <div className='w-full md:w-2/5   mt-6 mb-6'>
            <p className='text-2xl font-bold'>What our customers say :</p>
            </div>
            <div className="flex flex-col sm:flex-row   gap-3  justify-evenly bg-clients">
                {clientReviews.map((review, i) => (
                    <ClientsCard ClientReview={review} key={`review-${i}`}/>
                ))}
            </div>

        </div>
                </div>
    );
 }



export default Clients