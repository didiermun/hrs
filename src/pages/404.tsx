import { Link } from 'react-router-dom';
import notfound from '../files/404.svg';
export default function NotFound() {
    return(
        <div className="h-screen w-screen bg-white flex flex-col mx-auto items-center justify-center gap-20">
                <div className="flex w-max">
                    <img src={notfound} alt="" />
                </div>
                <div className='flex flex-col w-max items-center gap-10'>
                    <p className='text-[#565872] font-semibold text-5xl'>OOPS! PAGE NOT FOUND</p>
                    <Link to="/">
                    <button className='rounded-xl px-6 py-3 bg-secondary w-max text-white text-medium'>BACK TO HOME</button>
                    </Link>
                </div>
        </div>
    )
}