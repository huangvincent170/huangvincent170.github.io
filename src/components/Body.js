import React from "react"

import "./Body.css"

const oldBody = (<div className="backDiv">
<div className="bodyDiv">
    <p>test</p>
</div>
</div>);

class Body extends React.Component {
    render() {
        return <div className="bodyWrap">
            <div className="bodyDiv">
                <p>{this.props.children}</p>
            </div>
        </div>
    }
}

export default Body