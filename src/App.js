import './component/Login.css';
import './component/Home.css'
import Home from './component/Home';
import Login from './component/Login';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
function Hello() {
  return (
    <BrowserRouter>

       <Switch>

          <Route path='/Home'>
            <Home/>
          </Route>
        
            <Login/>
  
        </Switch>
    </BrowserRouter>
  );
}
export default Hello