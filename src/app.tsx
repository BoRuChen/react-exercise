import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import { Header } from "./components/header"
import { GuessNumber } from "./pages/guessNumber"

import { routes } from "./Route/route"

export const App = () => {
    routes.map((route) => {
        console.log(route.name, route.path, route.exact, route.component)
    })
    return (
        <div>
            <nav>
                <Header />
            </nav>
                <Switch>
                    {routes.map((route)=>{
                        return(
                            <Route key={route.name} path={route.path} exact={route.exact} component={route.component} />
                        )
                    })}
                    <Redirect to={"/"} />
                </Switch>
        </div>
    )
}