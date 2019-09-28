import React, { PureComponent } from "react"
import Navbar from "./Navbar"
class Layout extends PureComponent{
    render() {
        const linkss = [{link:"/", label:"Home"},
                        {link:"/resume", label:"Resume"},
                        {link:"/project", label:"Projects"}]

        return <div><Navbar links={linkss}></Navbar>{this.props.children}</div>
    }
}
export default Layout