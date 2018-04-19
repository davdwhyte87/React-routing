import React from "react";
import ReactDom from "react-dom";
import {BrowserRouter, Route} from "react-router-dom";
import Root from "./components/root";
import Home from "./components/home";
import Todos from "./components/todos";

class App extends React.Component{
    render(){
        return(
            
                <BrowserRouter>
                <Root>
                    <Route exact path="/todos" component={Todos}/>
                    <Route exact path="/hello" render={()=><h1>djod</h1>} />
                    <Route exact path="/" component={Home}/> 
                </Root>
                </BrowserRouter>
            
        );
    }
}
ReactDom.render(<App/>,document.getElementById('root'));