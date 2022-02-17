import './App.css';
import {   BrowserRouter as Router,
  Routes,
  Route } from "react-router-dom";
import Home from './Component/pages/Home/Home';
import Appointment from './Component/pages/Appointment/Appointment/Appointment';
import Login from './Component/pages/Login/Login';
import Signup from './Component/pages/Login/Signup/Signup';
import AuthProvider from './Component/pages/Context/AuthProvider/AuthProvider';
import PrivateRoute from './Component/pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Component/pages/Dashboard/Dashboard';
import DashboardHome from './Component/pages/Dashboard/Dashboard/DashboardHome/DashboardHome';
import MakeAdmin from './Component/pages/Dashboard/MakeAdmin/MakeAdmin';
import AdminRoute from './Component/pages/Login/AdminRoute/AdminRoute';
import AddDoctor from './Component/pages/Dashboard/AddDoctor/AddDoctor';

function App() {
  return (
    <div className="App">
     <AuthProvider>
        <Router>
          <Routes>
            <Route path="/appointment" element={<PrivateRoute>
              <Appointment />
            </PrivateRoute>}>
            </Route>
            <Route path="/dashboard" element={<PrivateRoute>
              <Dashboard />
            </PrivateRoute>}>
              <Route exact path="/dashboard" element={<DashboardHome></DashboardHome>}>
              </Route>
              <Route path={`/dashboard/makeAdmin`} element={
              <AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>  
              }>
              </Route>
              <Route path={`/dashboard/addDoctor`} element={<AdminRoute>
                <AddDoctor></AddDoctor>
              </AdminRoute>}>
              </Route>
            </Route>
            <Route path="/home" element={<Home />}>
            </Route>
            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/signup" element={<Signup />}>
            </Route>
            <Route exact path="/" element={<Home />}>
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    
    </div>
  );
}

export default App;
