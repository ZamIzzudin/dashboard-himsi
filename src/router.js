import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState, useEffect } from 'react'

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

export default function Router() {
    const [userData, setUserData] = useState({})

    useEffect(() => {
        const user = localStorage.getItem('user')
        setUserData(JSON.parse(user))
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
                <Route path="/programkerja" component={ProgramKerja} />
                <Route path="/berita" component={Berita} />
                <Route path="/layananmahasiswa" component={LayananMahasiswa} />
                <Route path="/hubungikami" component={Hubungikami} />
            </Switch>
        </BrowserRouter>
    )
}