
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";

import { RecordPage } from '../pages/RecordPage';
import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';

import { Navbar } from "../components/Navbar";

export const Routes = () => {
  return (
    <Router>
        <Navbar />
        <Switch>
            <Route exact path="/record" component={ RecordPage } />
            <Route exact path="/" component={ HomePage } />
            <Route path="/404" component={ NotFoundPage } />
            <Route path="*">
                <Redirect to="/404" />
            </Route>
        </Switch>
    </Router>
  )
}
