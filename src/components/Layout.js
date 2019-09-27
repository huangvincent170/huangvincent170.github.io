import React, { PureComponent } from "react"
import Navbar from "./Navbar"
class Layout extends PureComponent{
    render() {
        return <div><Navbar></Navbar>{this.props.children}</div>
    }
}
export default Layout