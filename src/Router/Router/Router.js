import { createBrowserRouter } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Home from "../../Components/Home/Home";
import Main from "../../Layout/Main";
import News from "../../Components/News/News";
import Destination from "../../Components/Destination/Destination";
import Blog from "../../Components/Blog/Blog";
import Contuct from "../../Components/Contuct/Contuct";
import Register from "../../Components/Register/Register";
import Login from "../../Components/Login/Login";
import PrivetRouter from "../PrivetRouter/PrivetRouter";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            { path: '/headder', element: <Header></Header> },
            { path: '/home', element: <PrivetRouter><Home></Home> </PrivetRouter> },
            { path: '/news', element: <News></News> },
            { path: '/destination', element: <PrivetRouter><Destination></Destination></PrivetRouter> },
            { path: '/blog', element: <Blog></Blog> },
            { path: '/contuct', element: <Contuct></Contuct> },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
            { path: '/*', element: <h1>Not Found ! 404</h1> }
        ]
    }
])