import React from "react";
import cn from "classnames";

class Alert extends React.Component{
    render(){
        const {children} = this.props
        const type = this.props.type;
        const alertClass = cn("alert",`alert-${type}`)
        return (
            <div className='container'>
                <div className='row'>
                    <div className={alertClass}>
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}
export default Alert