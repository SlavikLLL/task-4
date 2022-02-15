import React from "react";

class Progress extends React.Component{
    render(){
        const procentage = this.props;
        const ariaNow = this.props.procentage;
        const barStyle = {
            width:this.props.procentage + "%"
        }

        return(
            <div className="progress">
            <div className="progress-bar" role="progressbar" style={barStyle} aria-valuenow={ariaNow} aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        )
    }
    
}
export default Progress