import React from "react";
import Header from "./header";
class Root extends React.Component{
    render(){
        return(
        <div>
            <div>
                <Header/>
            </div>
            <div>
                {this.props.children}
            </div>
        </div>
        );
    }
}

export default Root;