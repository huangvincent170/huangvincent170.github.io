import React from "react"

import "./Body.css"

class Body extends React.Component {
    render() {
        return <div className="backDiv">
            <div className="bodyDiv">
                <p>{this.props.content}</p>
            </div>
        </div>
    }
}

export default Body