import React from "react";
import {BrowserRouter, Route, Link } from "react-router-dom"
import Todos from "./todos";
import Home from "./home";
class Header extends React.Component{
    render(){
        return(
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/todos">Todos</Link></li>
                    </ul>
                </nav>
                {/* <Route exact path="/todos" component={Todos}/>
                <Route exact path="/hello" render={()=><h1>djod</h1>} />
                <Route path="/" component={Home}/>  */}
            </div>
        );
    }
}

export default Header;