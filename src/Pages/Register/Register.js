import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { AuthContext } from '../../Contexts/AuthProvider';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, googleSignIn, setLoading, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('')

    //show and hide password
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    //handler to handle signup function
    const handleSignUp = data => {
        console.log(data)
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        console.log('Profile Updated');
                        setLoading(false);
                    })
                    .catch(error => {
                        console.log(error)
                    });
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }

    //handle Google Signin
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
                setLoading(false);
            }).catch((error) => {
                console.log(error.message);
            });
    }

    //REMINDER: you will need to install react hook form to use this kind of form.
    //stop and restart the react app if the error handling does'nt work.
    return (
        <div className="shadow-lg p-10 lg:mx-auto w-full lg:w-96 rounded-xl my-5 lg:my-24 border text-dark">
            <h2 className="text-3xl text-center font-semibold my-3">Register</h2>
            <p className='text-center text-slate-400'>Join us!</p>
            <form onSubmit={handleSubmit(handleSignUp)}>
                <div>
                    {signUpError && <p className='text-red-600'>{signUpError.slice(22, -2)}</p>}
                </div>
                <div className="form-control w-full ">
                    <label className="label"><span className="">Name :</span></label>
                    <input {...register("name",
                        {//name validation and error handling 
                            required: "Name is required"
                        })}
                        type="text" className="input input-bordered w-full " />
                    {errors.name && <p className="text-red-500 text-sm" role="alert">{errors.name?.message}</p>}
                </div>
                <div >
                    <label className="label"><span className="">Role :</span></label>
                    <select {...register("role")} className="select select-bordered w-full max-w-xs">
                        <option value="buyer">buyer</option>
                        <option value="seller">seller</option>
                        {/* temporary */}
                        <option value="admin">admin</option>
                    </select>
                </div>
                <div className="form-control w-full ">
                    <label className="label"><span className="">Email :</span></label>
                    <input {...register("email",
                        {//email validation and error handling 
                            required: "Email Address is required"
                        })}
                        type="email" className="input input-bordered w-full" />
                    {errors.email && <p className="text-red-500 text-sm" role="alert">{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Password :</span></label>
                    <div className='relative'>
                        <input {...register("password",
                            {//password validations and error handling 
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: 'Password must be 6 characters or longer'
                                }
                            })}
                            type={passwordShown ? "text" : "password"} className="input input-bordered w-full " />
                        <div onClick={togglePassword}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center">
                            <AiFillEye
                                className={passwordShown ? 'hidden' : 'block'} />
                            <AiFillEyeInvisible
                                className={passwordShown ? 'block' : 'hidden'} />
                        </div>
                    </div>
                    {errors.password && <p className="text-red-500 text-sm" role="alert">{errors.password?.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-3' value="Register" type="submit" />
            </form>
            <p className="text-sm my-1">Already have an account? <Link className="underline" to="/login">Login</Link></p>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
        </div>
    );
};

export default SignUp;