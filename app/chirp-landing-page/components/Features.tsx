import {features} from './lib/data'
export default function Features() { 
    return (
        <div className='flex flex-col w-4/5 items-start gap-y-4'>
            <div className='w-2/5 bg-red-400 mt-6 mb-6'>
                
            <p className='text-2xl font-bold'>Features that help you Tweet smarter.</p>
            </div>
        <div className="h-auto grid  lg:grid-cols-2 gap-6 ">
            {features.map((e, i) => (
                
                <div key={`f-${i}`} className='flex flex-col gap-2'>
                    <div >
                        <p>{ e.title}</p>
                    </div>

                    <div>
                        <p>{ e.emoji}</p>
                    </div>

                    <div>
                        <p>{ e.text}</p>
                    </div>

                </div>
            ))}
            </div>
        </div>
    );
}