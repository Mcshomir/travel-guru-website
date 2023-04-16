import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/logo.png'
import logoOne from '../../images/Rectangle 1.png'
import background from '../../images/Rectangle 1.png'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';
import { FaUserAlt } from 'react-icons/fa';





const Header = () => {
    const { user, logoutHandle } = useContext(AuthContext);
    console.log('userConsole', user)

    const logoutClick = () => {
        logoutHandle()
            .then(() => { })
            .catch(error => { console.error("error", error) })
    }


    return (


        <div >


            <div className="  navbar bg-base-100  justify-between max-w-full ps-10 pe-10">
                <div >
                    <img className='h-10  white' src={logo} alt="" />
                </div>

                <div className="form-control">

                    <input type="search" placeholder='Search' className='input input-bordered w-200' name="" id="" />
                </div>

                <div className='flex space-x-4'>
                    <NavLink to='/home'>Home</NavLink>
                    <NavLink to='/destination'>Destination</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>
                    <NavLink to='/contuct'>Contuct</NavLink>

                    {user?.uid ?

                        <>
                            <span>   {user?.displayName}</span>


                            <Link onClick={logoutClick} variant="light">Logout</Link>
                        </>
                        :
                        <>
                            <Link to='/login'>Login</Link>
                            <Link to='/register'>Register</Link>
                        </>
                    }

                    {user?.photoURL ?

                        <img style={{ height: '40px', borderRadius: '50%' }} roundedCircle src={user?.photoURL}></img>
                        :
                        <FaUserAlt></FaUserAlt>
                    }


                </div>



            </div>

        </div >

    );
};

export default Header;