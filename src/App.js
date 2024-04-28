
import Layout from './Components/Layout/Layout.js';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

// import Rootlayout from './Rootlayout';
import Homepage from './Components/Homepage/Homepage.js';
import Codingpage from './Components/Codingpage/Codingpage.js';
import Resumepage from './Components/ResumePage/Resumepage.js';
function App() {
  const routes=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Homepage/>
        },
        {
          path:"/code",
          
          element:<Codingpage/>
        },
        {
          path:"/resume",
          element:<Resumepage/>
        }
      ]
    }
  ])
  return (
    <div className="App">
     
      <RouterProvider router={routes}/>
      
    </div>
  );
}

export default App;
