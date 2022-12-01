import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './pages/Home'
import Profile from './pages/Profile'
import Event from './pages/Event'
import Article from './pages/Article'
import Banner from './pages/Banner'
import Link from './pages/Link'
import FAQ from './pages/FAQ'

import Sidebar from './components/Sidebar'

export default function Router() {
    return (
        <BrowserRouter>
            <Sidebar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/profile" component={Profile} />
                <Route path="/event" component={Event} />
                <Route path="/article" component={Article} />
                <Route path="/banner" component={Banner} />
                <Route path="/link" component={Link} />
                <Route path="/faq" component={FAQ} />
            </Switch>
        </BrowserRouter>
    )
}