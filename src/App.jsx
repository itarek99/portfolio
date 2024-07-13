import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layouts/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <div>About</div>,
      },
      {
        path: '/resume',
        element: <div>Resume</div>,
      },
      {
        path: '/works',
        element: <div>Works</div>,
      },
      {
        path: '/contact',
        element: (
          <div>
            <p className='text-9xl'>Contact</p>
            <p className='text-9xl'>Contact</p>
            <p className='text-9xl'>Contact</p>
            <p className='text-9xl'>Contact</p>
            <p className='text-9xl'>Contact</p>
            <p className='text-9xl'>Contact</p>
          </div>
        ),
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
