import { feature } from "../lib/data";

export default function FeatureCard({feature} :{feature:feature}) { 
    return (
        <div className='flex flex-col gap-3 border border-blue-400 p-3 rounded-md'>
                    <div >
                        <p className='text-xl'>{ feature.emoji}</p>
                    </div>

                    <div>
                        <p className='font-bold uppercase'> { feature.title}</p>
                    </div>

                    <div>
                        <p>{ feature.text}</p>
                    </div>

                </div>
    );
}