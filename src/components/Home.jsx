import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Home;