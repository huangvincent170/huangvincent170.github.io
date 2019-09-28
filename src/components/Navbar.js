import React from "react"
import { Link } from "gatsby"

import "./Navbar.css"

class Navbar extends React.Component {
    render () {
        return (
            <ul>
                {this.props.links.map( (obj) =>
                    <li>
                        <Link to={obj.link}>{obj.label}</Link>
                    </li>
                )}
            </ul>
        );
    }
}

export default Navbar