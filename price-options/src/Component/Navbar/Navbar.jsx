import { useState } from "react";
import Link from "./Link/Link";
import { IoMdMenu, IoMdCloseCircle } from "react-icons/io";

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile", name: "Profile" }
      ];
      
    return (
        <nav>
            <div onClick={()=>setOpen(!open)} className="text-xl md:hidden bg-gray-500 p-6">
                {
                    open === true ? 
                    <IoMdCloseCircle />:
                    <IoMdMenu />
                }
            </div>
            <ul className={`md:flex duration-1000 ${open?'top-16':'-top-40'} absolute md:static bg-gray-500 p-6`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;