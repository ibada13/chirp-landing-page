import {features} from './lib/data'
import FeatureCard from './ui/FeaturesCard';
export default function Features() { 
    return (
        <div className='flex flex-col w-4/5 items-start gap-y-4 mt-10 mb-10 bg-default'>
            <div className='w-2/5  mt-6 mb-6'>
                
            <p className='text-2xl font-extrabold'>Features that help you Tweet smarter.</p>
            </div>
        <div className="h-auto grid  lg:grid-cols-2 gap-12  ">
            {features.map((e, i) => (
                <FeatureCard feature={e} key={`f-${i}`}/>
            ))}
            </div>
        </div>
    );
}