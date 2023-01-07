import { BrowserRouter, Switch, Route } from "react-router-dom"
import { useEffect } from 'react'
import { asyncRefreshToken } from './state/auth/middleware'
import { useSelector, useDispatch } from 'react-redux'

import Home from './pages/Home'
import Profile from './pages/Profile'
import Berita from "./pages/Berita"
import Hubungikami from "./pages/HubungiKami"
import LayananMahasiswa from "./pages/LayananMahasiswa"
import Event from "./pages/Event"
import User from "./pages/User"
import Footer from './pages/Footer'
import Login from './pages/Login'
import Page404 from './pages/404'

import Loading from './components/Loading'
import Sidebar from './components/Sidebar'
import Header from './components/Header'

export default function Router() {
    const { auth = {} } = useSelector(states => states)
    const dispatch = useDispatch()

    // Refresh Token Cycle
    useEffect(() => {
        // do refresh token where token is'nt undefined
        if (auth.token !== undefined) {
            try {
                const interval = setInterval(() => {
                    dispatch(asyncRefreshToken())
                }, 10000);

                return () => clearInterval(interval);
            } catch (err) {
                console.log(err)
            }
        } else {
            // Try Tto get token from cookie
        }
    }, [auth, dispatch])

    return (
        <BrowserRouter>
            <Loading />
            {auth.token === undefined ? (
                // Route if user doesnt Login
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="*" component={Page404} />
                </Switch>
            ) : (
                // Route if user already Login
                <>
                    <Header />
                    <Sidebar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/events/:namaBidang" component={Event} />
                        <Route path="/articles" component={Berita} />
                        <Route path="/layanan-mahasiswa" component={LayananMahasiswa} />
                        <Route path="/hubungi-kami" component={Hubungikami} />
                        <Route path="/user" component={User} />
                        <Route path="/footer" component={Footer} />
                        <Route path="*" component={Page404} />
                    </Switch>
                </>
            )}
        </BrowserRouter>
    )
}