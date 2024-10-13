import { BsTwitter } from "react-icons/bs"

export const Button = ({className ,content}:{className? :string,content?:string}) => { 
    return (
        <button className={`bg-twitter p-2 rounded-md flex  items-center justify-center gap-2 ${className}`}><BsTwitter size={30} color="#fff"/> {content?content:"Sign In With Twitter"}</button>
        
    )
}