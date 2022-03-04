import { BrowserRouter as Router, Route, Routes,useLocation  } from 'react-router-dom';
import Bookings from './Bookings';
import Customers from './Customers';
import IndexDashboard from './IndexDashboard';
import NotFoundDashboard from './NotFoundDashboard';
import Rooms from './Rooms';
import Settings from './Settings';
import Transactions from './Transactions';

export default function DashboardRouter(){
    const location = useLocation();
    return(
        <div className="flex">
                <Routes>
                    <Route  path={`/overview`}  element={<IndexDashboard />} />
                    <Route  path={`/bookings`}  element={<Bookings />} />
                    <Route path={`/rooms`} element={<Rooms/>}/>
                    <Route path={`/customers`} element={<Customers/>}/>
                    <Route path={`/logs`} element={<Transactions/>}/>
                    <Route path={`/settings/*`} element={<Settings/>}/>
                    <Route path="*" element={<NotFoundDashboard/>}/>
                </Routes>
        </div>
    )
}