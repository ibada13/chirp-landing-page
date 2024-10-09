import Nav from "./components/NavBar";
import Home from "./components/Home";
export default function page() { 
    return (
        <div className="h-screen w-screen flex flex-col items-center ">
            <Nav />
            <Home />

        </div>
    );
}