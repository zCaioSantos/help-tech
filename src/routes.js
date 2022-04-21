import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/home';
import List from './pages/List/List';
import New from './pages/New/New';
import Single from './pages/Single/Single';


function RoutesApp() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route index element={<Home/>} />

                    {/* <Route path='login' element={<Login/>} />  */}

                    <Route path='/users'>
                        <Route index element={<List type="users"/>} /> 
                        <Route path="new" element={<New title="New User" type="users" />} />
                        <Route path=":id" element={<Single type="users" />} />
                    </Route>

                    <Route path='/products'>
                        <Route index element={<List type="products"/>} /> 
                        <Route path="new" element={<New title="New Product" type="products" />} />
                        <Route path=":id" element={<Single type="products" />} />
                    </Route>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;