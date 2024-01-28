import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
    return (
        <div>
            <header
                className=" h-16 flex justify-center">
                <nav className="w-full max-w-[1240px] flex justify-between items-center px-[10px]">
                    <span className="text-3xl">iRepair</span>
                    <ul className="space-x-5">
                        <NavLink to='/landing'>
                            Home
                        </NavLink>
                        <NavLink to='/about'>
                            About
                        </NavLink>
                        <Button>
                            <NavLink to='/login'>Login</NavLink>
                        </Button>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;