import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Table from './components/Table/Table';

// import Not404 from './pages/error';
import Home from './pages/home';
import List from './pages/List/List';
import New from './pages/New/New';
import Single from './pages/Single/Single';
// import Login from './pages/Login';

function RoutesApp() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route index element={<Home/>} />

                    {/* <Route path='login' element={<Login/>} />  */}

                    <Route path='/users'>
                        <Route index element={<List table={(<Table title="List Users" type="users" />)}/>} /> 
                        <Route path=":id" element={<Single />} />
                        <Route path="new" element={<New title="New User" />} />
                    </Route>

                    <Route path='/products'>
                        <Route index element={<List table={(<Table title="List Products" type="products" />)}/>} /> 
                        <Route path=":id" element={<Single />} />
                        <Route path="new" element={<New title="New Product"/>} />
                    </Route>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;