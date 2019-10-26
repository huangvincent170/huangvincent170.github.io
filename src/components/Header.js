import React from "react"

import "./Header.css"

const defaultHeader = (
    <div className="headerDiv">
        <h1 className="headerName"> VINCENT HUANG </h1>
    </div>
);
const majorHeader = (
    <div className="headerDiv">
        <h1 className="headerName"> VINCENT HUANG </h1>
        <h2 className="headerMajor">Student. Developer. Innovator.</h2>
    </div>
);

class Header extends React.Component {
    static defaultProps = {
        includeMajor : false
    };

    render() {
        if (this.props.includeMajor) {
            return majorHeader;
        }
        return defaultHeader;
    }
}

export default Header