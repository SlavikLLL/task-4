import React from "react";

class Toogle extends React.Component{
    constructor(props){
        super(props);
        this.state = {isToogle:false};
        
    }
    handleClick = () =>{
        this.setState(prevState =>({
            isToogle:!prevState.isToogle,
        }))
    }
    render(){
        return(
            <button onClick={this.handleClick} >
                {this.state.isToogle ? "вкл" : "выкл"}
            </button>
        )
    }
}
export default Toogle