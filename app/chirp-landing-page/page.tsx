import Nav from "./components/NavBar";
import Home from "./components/Home";
import Features from "./components/Features";
export default function page() { 
    return (
        <div className="h-screen w-screen flex flex-col items-center overflow-x-hidden">
            <Nav />
            <Home />
            <Features />
        </div>
    );
}