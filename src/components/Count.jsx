import React from "react";

class Count extends React.Component{
    constructor(props){
        super(props);
        this.state = {count:0}
    }
    Plus = () =>{
        this.setState({
            count:this.state.count+1
        })
    }
    Minus = () =>{
        this.setState({
            count:this.state.count-1
        })
    }
    Restart = () =>{
        this.setState({
            count:0
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button className = "btn btn-primary"onClick={this.Plus}>Плюс</button>
                <button className = "btn btn-dark"onClick={this.Restart}>Рестарт</button>
                <button className = "btn btn-danger"onClick={this.Minus}>Минус</button>
            </div>
        )
    }



    }



export default Count