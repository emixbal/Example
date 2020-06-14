import React from 'react'
import Home from './Home'
import {Route, Switch, BrowserRouter as Router} from "react-router-dom"

const router = () => { 

    return (
        <Router>
            <Switch>
                <Route exact path={"/"}>
                    <Home/>
                </Route>
            </Switch>
        </Router>
    )
}

export default router