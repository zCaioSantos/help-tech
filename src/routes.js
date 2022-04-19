import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Table from './components/Table/Table';

// import Not404 from './pages/error';
import Home from './pages/home';
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
                        <Route index element={<Single table={(<Table title="List Users" list={[{Id: 1, name: "Caio"}]}/>)}/>} /> 
                        
                    </Route>

                    <Route path='/products'>
                        <Route index element={<Single table={(<Table title="List Products" list={[{Id: 1, name: "Notebook Lenovo"}]}/>)}/>} /> 
                        
                    </Route>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;