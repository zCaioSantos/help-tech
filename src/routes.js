
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import isAuthenticated from './auth';

import Home from './pages/home';
import List from './pages/List/List';
import Login from './pages/Login/Login';
import New from './pages/New/New';
import Notfound from './pages/NotFound/NotFound';
import Single from './pages/Single/Single';


const PrivateRoute = ({ children }) => {
    return isAuthenticated() === "true" ? children : <Navigate to="/login" replace />
}


function RoutesApp() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route index element={<PrivateRoute><Home/></PrivateRoute>} />
                    <Route path='*' element={<Notfound/>} />
                    <Route path='login' element={<Login/>} /> 

                    <Route path='users'>
                        <Route index element={(<PrivateRoute><List type="users"/></PrivateRoute>)} /> 
                        <Route path="new" element={<PrivateRoute><New title="New User" type="users" /></PrivateRoute>} />
                        <Route path=":id" element={<PrivateRoute><Single type="users" title="Edit User" /></PrivateRoute>} />
                    </Route>

                    <Route path='products'>
                        <Route index element={<PrivateRoute><List type="products"/></PrivateRoute>} /> 
                        <Route path="new" element={<PrivateRoute><New title="New Product" type="products" /></PrivateRoute>} />
                        <Route path=":id" element={<PrivateRoute><Single type="products" title="Edit Product" /></PrivateRoute>} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;