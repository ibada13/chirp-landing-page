import {features} from './lib/data'
export default function Features() { 
    return (
        <div>

        <div className="h-auto grid  lg:grid-cols-2 gap-6 w-4/5">
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