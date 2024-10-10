import { CiTwitter } from "react-icons/ci"

export const Button = ({className ,content}:{className? :string,content?:string}) => { 
    return (
        <button className={`bg-twitter p-2 rounded-md flex  items-center justify-center gap-2 ${className}`}><CiTwitter size={30} className="text-white"/> {content?content:"Sign In With Twitter"}</button>
        
    )
}