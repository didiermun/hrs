import { Route, Routes  } from 'react-router-dom';
import Bookings from './Bookings';
import Customers from './Customers';
import IndexDashboard from './Dashboard';
import HotelDetails from './HotelDetails';
import NotFoundDashboard from './NotFoundDashboard';
import Rooms from './Rooms';
import Settings from './Settings';
import Transactions from './Transactions';

export default function DashboardRouter(){
    return(
        <div className="flex">
                <Routes>
                    <Route  path={`/overview`}  element={<IndexDashboard />} />
                    <Route  path={`/bookings`}  element={<Bookings />} />
                    <Route path={`/rooms`} element={<Rooms/>}/>
                    <Route path={`/customers`} element={<Customers/>}/>
                    <Route path={`/hotel`} element={<HotelDetails/>}/>
                    <Route path={`/logs`} element={<Transactions/>}/>
                    <Route path={`/settings/*`} element={<Settings/>}/>
                    <Route path="*" element={<NotFoundDashboard/>}/>
                </Routes>
        </div>
    )
}