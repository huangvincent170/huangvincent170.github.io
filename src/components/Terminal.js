import React from "react"

import "./Terminal.css"

class Terminal extends React.Component {
    render() {
        const items = []
        for (var i = 0; i < this.props.text.length; i++) {
            if (i % 2 == 0) {
                items.push(<p className="terminalCmd">> {this.props.text[i]}</p>);
            } else {
                items.push(<p className="terminalRes"> => {this.props.text[i]}</p>);
            }
        }
        return (
            <div className="terminalWrap">
                <div className="terminalDiv">
                    {items}
                </div>
            </div>
        );
    }
}

export default Terminal