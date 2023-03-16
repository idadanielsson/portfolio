import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,

        children: [
            {
                path: '/',
                element: <Hero />,
                index: true,
            },

            {
                path: '/about',
                element: <About />,
            },

            {
                path: '/contact',
                element: <Contact />,
            },
    
        ]
    }
]);