import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState, useEffect } from 'react'
import api from './utils/api'
import cookies from './utils/cookies'

import Home from './pages/Home'
import Profile from './pages/Profile'
import Event from './pages/Event'
import Article from './pages/Article'
import Banner from './pages/Banner'
import Links from './pages/Link'
import FAQ from './pages/FAQ'
import Login from './pages/Login'

import Sidebar from './components/Sidebar'

export default function Router() {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        if (userData !== null) {
            const refreshToken = async () => {
                const dataAfterRefresh = await api.Refresh()
                cookies.remove('refreshToken')
                cookies.add('refreshToken', dataAfterRefresh, 1)
            }

            const interval = setInterval(() => {
                refreshToken();
            }, 50000);

            return () => clearInterval(interval);
        }
    }, [userData])

    useEffect(() => {
        const user = cookies.get('refreshToken')
        setUserData(user)
    }, [])

    if (userData === null) {
        return (
            <BrowserRouter>
                <Route exact path="/" component={Login} />
            </BrowserRouter>
        )
    }

    return (
        <BrowserRouter>
            <Sidebar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/profile" component={Profile} />
                <Route path="/event" component={Event} />
                <Route path="/article" component={Article} />
                <Route path="/banner" component={Banner} />
                <Route path="/link" component={Links} />
                <Route path="/faq" component={FAQ} />
            </Switch>
        </BrowserRouter>
    )
}