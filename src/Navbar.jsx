import { Outlet,Link } from "react-router-dom";

const Navbar = () => {
    return(
        <>
        <nav className="flex justify-between p-5 items-center">
            <Link to = "/">
            <h1 className="text-2xl text-slate-200 font-poppins font-bold">MY JOURNAL</h1>
            </Link>
            <div className="flex gap-6 items-center uppercase text-sm font-poppins">
                <Link to = "/create-journal" 
                className="text-slate-100 border-2 rounded-full border-white/50 hover:border-slate-50 hover:border-2 hover:bg-slate-50 hover:text-slate-800 py-2 px-4">Add an entry</Link>
            </div>
        </nav>
        <Outlet/>
        </>
    );
}

export default Navbar;