import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/Context';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';


const Login = () => {
    const { createSignIn, googleProviderHandle } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [error, setError] = useState('')



    const loginClick = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)
        createSignIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('')


                navigate(from, { replace: true });

            })
            .catch(error => {
                console.error('error', error);
                setError(error.message)

            })

    }
    const googleProviderClick = () => {
        googleProviderHandle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className=" ">
                <div className="text-center mb-5 ">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <form onSubmit={loginClick} className="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link to="/" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control">
                            <button className="btn btn-primary mb-6">Login</button>
                            <span>{error}</span>
                            <button onClick={googleProviderClick} className="btn btn-info btn-outline mb-2 text-sm">Contunue with google !</button>
                            <button className="btn btn-info btn-outline text-sm">Contunue with facebook !</button>
                        </div>
                    </div>
                </form>
            </div>

        </div >
    );
};

export default Login;