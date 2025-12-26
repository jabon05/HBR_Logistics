import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' 
import 'bootstrap/dist/css/bootstrap.min.css' // ¡No olvides importar Bootstrap aquí!
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { RouterProvider } from "react-router-dom"; 
import { router } from "./routes"; 

const Main = () => {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />)