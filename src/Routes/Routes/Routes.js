import {createBrowserRouter} from 'react-router-dom';
import Main from '../../Layout/Main';
import ErrorElement from '../../ErrorElement/ErrorElement';
import Home from '../../Pages/Home/Home/Home';
import Category from '../../Pages/Category/Category/Category';
import News from '../../Pages/News/News/News';

export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorElement></ErrorElement>,
        children:[
            {
                path:'/',
                element:<Home/>

            },
            {
            path:'/home',
            element:<Home/>
            },
            {
                path:'/categori/:id',
                element:<Category/>
            },
            {
                path:'/news/:id',
                element:<News/>
            },
            
            {
              
                
            }
        ]
    }
])
