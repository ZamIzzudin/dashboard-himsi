import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState, useEffect } from 'react'
import api from './utils/api'
import cookies from './utils/cookies'

import Home from './pages/Home'
import Profile from './pages/Profile'
// import Event from './pages/Event'
// import Article from './pages/Article'
// import Banner from './pages/Banner'
// import Links from './pages/Link'
// import FAQ from './pages/FAQ'
import Berita from "./pages/Berita";
import Hubungikami from "./pages/HubungiKami";
import LayananMahasiswa from "./pages/LayananMahasiswa";
import ProgramKerja from "./pages/ProgramKerja";
import Login from './pages/Login'

import Sidebar from './components/Sidebar'
import Header from './components/Header'

export default function Router() {
    const [userData, setUserData] = useState(null)

    // useEffect(() => {
    //     if (userData !== null) {
    //         try {
    //             const refreshToken = async () => {
    //                 const { accessToken } = await api.Refresh()
    //                 setUserData(accessToken)
    //                 console.log(accessToken)
    //                 cookies.remove('refreshToken')
    //                 cookies.add('refreshToken', accessToken, 1)
    //             }

    //             const interval = setInterval(() => {
    //                 refreshToken();
    //             }, 15000);

    //             return () => clearInterval(interval);
    //         } catch (err) {
    //             setUserData(null)
    //             cookies.remove('refreshToken')
    //             window.location.href = '/'
    //             window.location.reload()
    //         }
    //     }
    // }, [userData])

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
            <Header />
            <Sidebar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/profile" component={Profile} />
                <Route path="/program-kerja" component={ProgramKerja} />
                <Route path="/berita" component={Berita} />
                <Route path="/layanan-mahasiswa" component={LayananMahasiswa} />
                <Route path="/hubungi-kami" component={Hubungikami} />
            </Switch>
        </BrowserRouter>
    )
}