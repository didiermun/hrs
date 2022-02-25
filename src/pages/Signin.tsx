import google from '../files/auth/google.svg';
import facebook from '../files/auth/facebook.svg';
import SigninForm from '../components/Molecules/forms/SigninForm';
import { Link } from 'react-router-dom';
export default function Signup(){
    return (
        <div className="w-screen h-screen bg-[#D83A56] grid grid-cols-3 lg:grid-cols-6">
            <div className="col-span-3 hidden lg:flex flex-col mx-auto items-center justify-center px-4 lg:px-12 gap-3">
                <h1 className='text-white text-5xl'>HMS</h1>
                <p className="text-white text-2xl font-extralight text-center">The right place for you to be on your vacation with the right and affordable cost😛</p>
            </div>
            <div className='col-span-3 bg-white px-3 py-3 flex flex-col gap-8 mx-auto items-center justify-center w-full'>
                <p className='text-5xl'>Login to account</p>
                <div className='flex gap-4'>
                    <button className='rounded-2xl  shadow-xl px-4 py-2 text-lg'> 
                        <div className='flex gap-3'>
                            <img src={google} alt="" />
                            <span>Login with Google</span>
                        </div>
                    </button>
                    <button className='rounded-2xl  shadow-xl px-4 py-2 text-lg'> 
                        <div className='flex gap-3'>
                            <img src={facebook} alt="" />
                            <span>Login with Facebook</span>
                        </div>
                    </button>
                </div>
                <div className='flex'>
                    OR
                </div>
                <SigninForm/>
                <div className='flex justify-between gap-24'>
                    <span>Don't have an account yet?</span>
                    <Link to="/auth/register">
                        <span className='text-secondary cursor-pointer font-medium hover:underline transation-all'>Sign up here</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}