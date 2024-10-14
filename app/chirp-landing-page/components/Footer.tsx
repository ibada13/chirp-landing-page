import { BsTwitter } from "react-icons/bs";
import Logo from './ui/logo'
const Footer = () => {
    return (
        <div className="w-full bg-clients flex justify-center items-center mb-2 text-text">
        <div className=" p-2 w-4/5 flex h-1/6 bg-clients">
            <div className="h-full flex flex-grow justify-start items-center p-2 ">
            
                <Logo />
            </div>    
            <div className="h-full  flex flex-grow justify-end items-center gap-x-5 p-2">
                <p><BsTwitter size={25}    /></p>
                <p>Privacy policy</p>
                <p>terms of use</p>

            </div>    

        </div>
        </div>
    );
 }

export default Footer