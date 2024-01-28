import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import FormPage from '../pages/Form';
import Animation from '../pages/Animation';
import LandingPage from '@/pages/LandingPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/form',
                element: <FormPage />
            },
            {
                path: '/landing',
                element: <LandingPage />
            }
        ]
    },
    {
        path: '/animation',
        element: <Animation />,
    }
]);

export default router;