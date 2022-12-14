import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firbase.init';

const Header = () => {
    const [user] = useAuthState(auth)

    return (
        <div className="navbar w-11/12 mx-auto h-20 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-10 h-10 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52 font-medium ">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/faculty">Academic</Link></li>
                        <li><Link to="/campus">Campus</Link></li>
                        <li><Link to="/addmission">Addmission</Link></li>
                        <li><Link to="/">Gallery</Link></li>
                        <li><Link to="/">Research</Link></li>
                        <li><Link to="/">About</Link></li>
                        {user && <li><Link to="">Sign Out</Link></li>}
                    </ul>
                </div>
                <Link to="/" className="normal-case text-2xl font-bold text-primary "><span className='text-neutral'>Brimstone</span> <br /> University</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-lg font-medium p-0">
                    <li><Link className='hover:bg-secondary' to="/">Home</Link></li>
                    <li><Link className='hover:bg-secondary' to="/faculty">Academic</Link></li>
                    <li><Link className='hover:bg-secondary' to="/campus">Campus</Link></li>
                    <li><Link className='hover:bg-secondary' to="/addmission">Addmission</Link></li>
                    <li><Link className='hover:bg-secondary' to="/">Gallery</Link></li>
                    <li><Link className='hover:bg-secondary' to="/">Research</Link></li>
                    <li><Link className='hover:bg-secondary' to="/">About</Link></li>
                    {user && <li><Link className='hover:bg-secondary' to="/" onClick={() => signOut(auth)}>Sign Out</Link></li>}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/addmission" className="btn btn-primary text-white hover:text-primary hover:bg-white" >Apply Now</Link>
            </div>
        </div>
    );
};

export default Header;