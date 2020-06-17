import React from 'react'
import Home from './Home'
import Sidebar from './Sidebar'
import Data from './Data'
import {Route, Switch, BrowserRouter as Router} from "react-router-dom"

const router = () => { 

    return (
        <div className="d-flex">
            <Router>
                <Sidebar />
                <div className="flex-grow-1">
                    <div className="d-flex flex-column h-100">
                        <div className="h-56px text-white bg-primary text-nowrap overflow-hidden centering-left">
                            Dashboard Monitoring
                        </div>
                        <div className="flex-grow-1">
                            <Switch>
                                <Route exact path={"/"}>
                                    <Home/>
                                </Route>
                                <Route exact path={"/data"}>
                                    <Data/>
                                </Route>
                            </Switch>
                        </div>
                    </div>
                    
                </div>
            </Router>
        </div>
    )
}

export default router