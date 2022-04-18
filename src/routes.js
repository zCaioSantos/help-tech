import { BrowserRouter, Routes, Route} from 'react-router-dom';

// import Not404 from './pages/error';
import Home from './pages/home';
// import Login from './pages/Login';

function RoutesApp() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route index element={<Home/>} />
                    {/* <Route path='login' element={<Login/>} />  */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;