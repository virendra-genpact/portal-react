import 'bulma/css/bulma.min.css';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Quotes from './pages/Quotes';
import Application from './pages/Applications';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div id="page">
        <Sidebar/>
        
        <div id="content" className='p-5'>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/applications' element={<Application/>}/>
            <Route path='/quotes' element={<Quotes/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
