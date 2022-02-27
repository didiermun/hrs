import logo from '../files/logo.svg'
import overview from '../files/dashboard/sidebar/overview.svg'
import booking from '../files/dashboard/sidebar/booking.svg'
import room from '../files/dashboard/sidebar/room.svg'
import transaction from '../files/dashboard/sidebar/transaction.svg'
import settings from '../files/dashboard/sidebar/settings.svg'
import customer from '../files/dashboard/sidebar/customer.svg'
export default function Sidebar() {
    return (
        <div className="w-full h-screen bg-white flex flex-col pt-4 gap-6">
            <div className='px-2 py-6'>
                <div className='flex gap-4 px-3 cursor-pointer py-2'>
                    <img src={logo} alt="logo" />
                    <span className='font-semibold text-lg text-primary'>HotReserve</span>
                </div>  
            </div>

            <div className='flex flex-col gap-1 pb-6 border-b border-gray-200'>
                <div className='flex gap-4 px-3 cursor-pointer py-2 border-l-4 border-primary bg-red-50'>
                    <img src={overview} className="h-6" alt="logo" />
                    <span className='text-lg text-secondary'>Overview</span>
                </div>

                <div className='flex gap-4 px-3 cursor-pointer py-2 border-l-4'>
                    <img src={room} className="h-6" alt="logo" />
                    <span className='text-lg text-dark font-extralight'>Rooms</span>
                </div>

                <div className='flex gap-4 px-3 cursor-pointer py-2'>
                    <img src={customer} className="h-6" alt="logo" />
                    <span className='text-lg text-dark font-extralight'>Customers</span>
                </div>

                <div className='flex gap-4 px-3 cursor-pointer py-2 border-l-4 '>
                    <img src={transaction} className="h-6" alt="logo" />
                    <span className='text-lg text-dark font-extralight'>Transactions</span>
                </div>

                <div className='flex gap-4 px-3 cursor-pointer py-2'>
                    <img src={booking} className="h-6" alt="logo" />
                    <span className='text-lg text-dark font-extralight'>Bookings</span>
                </div>

                <div className='flex gap-4 px-3 cursor-pointer py-2'>
                    <img src={settings} className="h-6" alt="logo" />
                    <span className='text-lg text-dark font-extralight'>Settings</span>
                </div>
            </div>

            <div className='flex flex-col gap-2 pb-6'>
            <div className='flex gap-4 px-3 cursor-pointer py-2'>
                    <img src={booking} className="h-6" alt="logo" />
                    <span className='text-lg text-dark font-extralight'>Bookings</span>
                </div>

                <div className='flex gap-4 px-3 cursor-pointer py-2'>
                    <img src={settings} className="h-6" alt="logo" />
                    <span className='text-lg text-dark font-extralight'>Settings</span>
                </div>
            </div>
        </div>
    )
}