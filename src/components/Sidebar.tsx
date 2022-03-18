import logo from '../files/logo.svg'
import booking from '../files/dashboard/sidebar/booking.svg'
import settings from '../files/dashboard/sidebar/settings.svg'
import { useLocation, useNavigate } from 'react-router-dom'
import SidebarItems, { linkProps } from './Atom/SidebarItems'
export default function Sidebar() {
    const links: linkProps[] = [
        {
            name: 'Overview',
            to: '/dashboard/overview',
            icon: 'overview',
        },
        {
            name: 'Hotel',
            to: '/dashboard/hotel',
            icon: 'room',
        },
        {
            name: 'Rooms',
            to: '/dashboard/rooms',
            icon: 'room',
        },
        {
            name: 'Customers',
            to: '/dashboard/customers',
            icon: 'customer',
        },
        {
            name: 'Bookings',
            to: '/dashboard/bookings',
            icon: 'booking',
        },
        {
            name: 'Transactions',
            to: '/dashboard/logs',
            icon: 'transaction',
        },
        {
            name: 'Settings',
            to: '/dashboard/settings',
            icon: 'settings',
        },
        {
            name: 'Logout',
            to: '/auth/signin',
            icon: 'customer',
        }
    ]
    const navigate = useNavigate();
    const changeUrl = (url: string) => {
        navigate(url);
    }
    const location  = useLocation();
    const path = location.pathname;
    return (
        <div className="w-full h-screen bg-white flex flex-col pt-4 gap-6">
            <div className='px-2 py-6'>
                <div className='flex gap-4 px-3 cursor-pointer py-2'>
                    <img src={logo} alt="logo" />
                    <span className='font-semibold text-lg text-primary'>HotReserve</span>
                </div>  
            </div>
            <SidebarItems links={links} />

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