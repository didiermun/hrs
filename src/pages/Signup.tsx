import travel from '../files/booked.svg';
import google from '../files/auth/google.svg';
import facebook from '../files/auth/facebook.svg';
import SigninForm from '../components/forms/SigninForm';
export default function Signup(){
    return (
        <div className="w-screen h-screen bg-[#D83A56] grid grid-cols-3 md:grid-cols-6">
            <div className="col-span-3  flex flex-col mx-auto items-center justify-center px-4">
                <p className="text-white text-3xl">The right place with the right cost😂</p>
                <img src={travel} alt="" />
            </div>
            <div className='col-span-3 bg-white px-3 py-3 flex flex-col gap-8 mx-auto items-center justify-center w-full'>
                <p className='text-5xl'>Create account</p>
                <div className='flex gap-4'>
                    <button className='rounded-2xl  shadow-xl px-4 py-2 text-lg'> 
                        <div className='flex gap-3'>
                            <img src={google} alt="" />
                            <span>Sign up with Google</span>
                        </div>
                    </button>
                    <button className='rounded-2xl  shadow-xl px-4 py-2 text-lg'> 
                        <div className='flex gap-3'>
                            <img src={facebook} alt="" />
                            <span>Sign up with Facebook</span>
                        </div>
                    </button>
                </div>
                <div className='flex'>
                    OR
                </div>
                <SigninForm/>
                <div className='flex justify-between gap-24'>
                    <span>Already have an account?</span>
                    <span className='text-secondary cursor-pointer font-medium hover:underline transation-all'>Sign in here</span>
                </div>
            </div>
        </div>
    )
}