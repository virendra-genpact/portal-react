import 'bulma/css/bulma.min.css';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Quotes from './pages/Quotes';
import Application from './pages/Applications';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
  },
  {
    path: "/quotes",
    element: <Quotes/>,
  },
  {
    path: "/applications",
    element: <Application/>,
  },
]);

function App() {
  return (
    <>
      <Header />
      <div id="page">
        <Sidebar/>
        
        <div id="content" style={{padding: '20px 30px'}}>
          <RouterProvider router={router} />
        </div>
      </div>
    </>
  );
}

export default App;
