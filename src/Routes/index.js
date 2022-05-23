import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./../Pages/Home";
import PlayGame from "./../Pages/PlayGame";
import NewGame from "./../Pages/NewGame";
import PageNotFound from "./../Pages/PageNotFound";


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/game/new" component={NewGame} />
                <Route exact path="/game/play" component={PlayGame} />
                <Route path="*" component={PageNotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;