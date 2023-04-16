import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';

const Register = () => {
    const { register, emailUpdate, updateProfileHandle } = useContext(AuthContext)
    const navigate = useNavigate();
    const [error, setError] = useState('')

    const onSubmitClick = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value
        console.log(name, email, photoURL, password, confirmPassword)
        register(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
                form.reset();
                verifyEmail();
                updateProfileClick(name, photoURL);
                navigate('/login');

            })
            .catch(error => {
                console.error('error', error)
                setError(error.message);
            })


    }
    const verifyEmail = () => {
        emailUpdate()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const updateProfileClick = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateProfileHandle(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div className="hero  bg-base-200 ">
                <div className="hero-content ">


                    <div className="card flex-shrink-0 w-96  shadow-2xl bg-base-100">
                        <form onSubmit={onSubmitClick} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">First Name </span>
                                </label>
                                <input type="text" name="name" placeholder="first name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL </span>
                                </label>
                                <input type="text" name="photoURL" placeholder="photoURL" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name="confirmPassword" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Create an account</button>
                                <span><small>{error}</small></span>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Already have an account ? <Link to='/login'>Plz login !</Link> </a>
                                </label>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;