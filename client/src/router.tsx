import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { Home, ExpenseDetails } from "./pages";

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/expense-details">
                        <ExpenseDetails />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}