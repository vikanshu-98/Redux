import {createRoot} from 'react-dom/client'
import App from './App'
import store from './multiple-reducer/store'
import { Provider } from './react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'

const router = createBrowserRouter([{
    path : '/',
    element : <App/>,
    children : [
        {
            path : '/',
            element : <Home/>,
        },
        {
            path : '/cart',
            element : <Cart/>,   

        }
    ]
}])
createRoot(document.getElementById('root'))
.render(<Provider store={store}><RouterProvider router={router}/></Provider> )