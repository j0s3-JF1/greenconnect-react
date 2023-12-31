import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//Importe de páginas
import Home from '../Pages/Home/Home';
import Pitch from "../Pages/Pitch/Pitch";
import Instituto from "../Pages/Instituto/Instituto";
import Login from "../Pages/Login/Login";
import Games from "../Pages/Games/Games";
import Conteudo from "../Pages/Conteudo/Conteudo";
import Profile from "../Pages/Profile/Profile";
import Rede from "../Pages/Rede/Rede";
import Grupos from "../Pages/Grupos/Grupos";
import Noticias from "../Pages/Noticias/Noticias";
import Diversidade from "../Pages/Diversidade/Diversidade";
import Ranking from "../Pages/Ranking/Ranking";
import Sobre from "../Pages/Sobre/Sobre";
import Esqueceu from "../Pages/Esqueceu/Esqueceu";

function Routes() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Pitch/>
        },
        {
            path: '/home',
            element: <Home/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/instituto',
            element: <Instituto/>
        },
        {
            path: '/games',
            element: <Games/>
        },
        {
            path: '/conteudo',
            element: <Conteudo/>
        },
        {
            path: '/perfil',
            element: <Profile/>
        },
        {
            path: '/rede',
            element: <Rede/>
        },
        {
            path: '/grupos',
            element: <Grupos/>
        },
        {
            path: '/noticias',
            element: <Noticias/>
        },
        {
            path: '/diversidade',
            element: <Diversidade/>
        },
        {
            path: '/ranking',
            element: <Ranking/>
        },
        {
            path: '/sobre',
            element: <Sobre/>
        },
        {
            path: '/esqueceu',
            element: <Esqueceu/>
        }
    ]);

    return <RouterProvider router={router}/>
}

export default Routes;