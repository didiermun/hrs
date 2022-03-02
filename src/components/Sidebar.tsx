import logo from '../files/logo.svg'
import overview from '../files/dashboard/sidebar/overview.svg'
import booking from '../files/dashboard/sidebar/booking.svg'
import room from '../files/dashboard/sidebar/room.svg'
import transaction from '../files/dashboard/sidebar/transaction.svg'
import settings from '../files/dashboard/sidebar/settings.svg'
import customer from '../files/dashboard/sidebar/customer.svg'
import { useLocation, useNavigate } from 'react-router-dom'
export default function Sidebar() {
    const navigate = useNavigate();
    const changeUrl = (url: string) => {
        navigate(url);
    }
    const location  = useLocation();
    const path = location.pathname;
    const comparePath = (url: string) => {
        return url === path;
    }
    console.log(path == '/dashboard')
    return (
        <div className="w-full h-screen bg-white flex flex-col pt-4 gap-6">
            <div className='px-2 py-6'>
                <div className='flex gap-4 px-3 cursor-pointer py-2'>
                    <img src={logo} alt="logo" />
                    <span className='font-semibold text-lg text-primary'>HotReserve</span>
                </div>  
            </div>

            <div className='flex flex-col gap-1 pb-6 border-b border-gray-200'>
                <div onClick={()=>changeUrl("/dashboard")} className='flex gap-4 px-3 cursor-pointer py-2 border-l-4 border-primary bg-red-50'>
                    <img src={overview} className="h-6" alt="logo" />
                    <span className={`text-lg `+comparePath('/dashboard') ? 'text-secondary': ''}>Overview</span>
                </div>

                <div onClick={()=>changeUrl("/dashboard/rooms")} className='flex gap-4 px-3 cursor-pointer py-2 border-l-4'>
                    <img src={room} className="h-6" alt="logo" />
                    <span className='text-lg text-dark font-extralight'>Rooms</span>
                </div>

                <div onClick={()=>changeUrl("/dashboard/customers")} className='flex gap-4 px-3 cursor-pointer py-2'>
                    <img src={customer} className="h-6" alt="logo" />
                    <span className='text-lg text-dark font-extralight'>Customers</span>
                </div>

                <div onClick={()=>changeUrl("/dashboard/logs")} className='flex gap-4 px-3 cursor-pointer py-2 border-l-4 '>
                    <img src={transaction} className="h-6" alt="logo" />
                    <span className='text-lg text-dark font-extralight'>Transactions</span>
                </div>

                <div onClick={()=>changeUrl("/dashboard/bookings")} className='flex gap-4 px-3 cursor-pointer py-2'>
                    <img src={booking} className="h-6" alt="logo" />
                    <span className='text-lg text-dark font-extralight'>Bookings</span>
                </div>

                <div onClick={()=>changeUrl("/dashboard/settings")} className='flex gap-4 px-3 cursor-pointer py-2'>
                    <img src={settings} className="h-6" alt="logo" />
                    <span className='text-lg text-dark font-extralight'>Settings</span>
                </div>
            </div>

            <div className='flex flex-col gap-2 pb-6'>
            <div onClick={()=>changeUrl("/dashboard/bookings")} className='flex gap-4 px-3 cursor-pointer py-2'>
                    <img src={booking} className="h-6" alt="logo" />
                    <span className='text-lg text-dark font-extralight'>Bookings</span>
                </div>

                <div onClick={()=>changeUrl("/dashboard/settings")} className='flex gap-4 px-3 cursor-pointer py-2'>
                    <img src={settings} className="h-6" alt="logo" />
                    <span className='text-lg text-dark font-extralight'>Settings</span>
                </div>
            </div>
        </div>
    )
}