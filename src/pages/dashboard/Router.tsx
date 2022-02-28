import { BrowserRouter as Router, Route, Routes,useLocation  } from 'react-router-dom';
import IndexDashboard from './IndexDashboard';

export default function DashboardRouter(){
    const location = useLocation();
    return(
        <div className="flex">
            <Router>
                <Routes>
                <Route  path={`${location.pathname}`}  element={<IndexDashboard />} />
                </Routes>
            </Router>
        </div>
    )
}