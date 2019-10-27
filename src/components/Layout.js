import React, { PureComponent } from "react"
import Navbar from "./Navbar"
class Layout extends PureComponent{
    render() {
        const links = [{link:"/", label:"Home"},
                        {link:"/resume", label:"Resume"},
                        {link:"/project", label:"Projects"}]

        return  <div>
                    {/*
                    <Navbar links={links}/>
                    */}
                    {this.props.children}
                </div>
    }
}
export default Layout