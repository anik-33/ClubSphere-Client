import React from 'react';
import { useForm } from 'react-hook-form';

import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from './SocialLogin';
import useAuth from '@/Hooks/useAuth';
import useAxiosSecure from '@/Hooks/UseAxiossecure';
import axios from 'axios';



const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUser, updateUserProfile } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();


    const handleRegistration = (data) => {

        const profileImg = data.photo[0];

        registerUser(data.email, data.password)
            .then(() => {

                // 1. store the image in form data
                const formData = new FormData();
                formData.append('image', profileImg);

                // 2. send the photo to store and get the ul
                const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`

                axios.post(image_API_URL, formData)
                    .then(res => {
                        const photoURL = res.data.data.url;

                        // create user in the database
                        const userInfo = {
                            email: data.email,
                            displayName: data.name,
                            photoURL: photoURL,

                        }
                        axiosSecure.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user created in the database');
                                }
                            })


                        // update user profile to firebase
                        const userProfile = {
                            displayName: data.name,
                            photoURL: photoURL
                        }

                        updateUserProfile(userProfile)
                            .then(() => {
                                // console.log('user profile updated done.')
                                navigate(location.state || '/');
                            })
                            .catch(error => console.log(error))
                    })



            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="w-full bg-transparent mx-auto mt-10 p-6 rounded-2xl  shadow-2xl">

            {/* Header */}
            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-white mb-1">
                    Welcome to ClubSphere
                </h2>
                <p className="text-whitte text-sm">
                    Please register to continue
                </p>
            </div>

            {/* Form */}
            <form
                onSubmit={handleSubmit(handleRegistration)}
                className="space-y-4"
            >
                {/* Name */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium mb-1">Name</label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        {...register('name', { required: true })}
                        className="input input-bordered w-full bg-transparent"
                    />
                    {errors.name && (
                        <p className="text-xs text-red-500 mt-1">Name is required</p>
                    )}
                </div>

                {/* Photo */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium mb-1">Photo</label>
                    <input
                        type="file"
                        {...register('photo', { required: true })}
                        className="file-input file-input-bordered w-full bg-transparent"
                    />
                    {errors.photo && (
                        <p className="text-xs text-red-500 mt-1">Photo is required</p>
                    )}
                </div>

                {/* Email */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium mb-1 ">Email</label>
                    <input
                        type="email"
                        placeholder="Email Address"
                        {...register('email', { required: true })}
                        className="input input-bordered w-full bg-transparent"
                    />
                    {errors.email && (
                        <p className="text-xs text-red-500 mt-1">Email is required</p>
                    )}
                </div>

                {/* Password */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium mb-1">Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        {...register('password', {
                            required: true,
                            minLength: 6,
                            pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
                        })}
                        className="input input-bordered w-full bg-transparent"
                    />
                    {errors.password?.type === 'required' && (
                        <p className="text-xs text-red-500 mt-1">Password is required</p>
                    )}
                    {errors.password?.type === 'minLength' && (
                        <p className="text-xs text-red-500 mt-1">
                            Password must be 6 characters or longer
                        </p>
                    )}
                    {errors.password?.type === 'pattern' && (
                        <p className="text-xs text-red-500 mt-1">
                            Password must have uppercase, lowercase, number & special character
                        </p>
                    )}
                </div>

                {/* Submit Button */}
                <button className="btn btn-neutral w-full mt-3">Register</button>
            </form>

            {/* Footer Links */}
            <p className="text-sm text-center mt-4">
                Already have an account?{' '}
                <Link
                    to="/login"
                    state={location.state}
                    className="text-indigo-600 font-medium hover:underline"
                >
                    Login
                </Link>
            </p>

            {/* Social Login */}
            <div className="mt-5">
                <SocialLogin />
            </div>
        </div>
    );
};

export default Register;