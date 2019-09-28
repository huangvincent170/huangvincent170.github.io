import React from "react"
import { Link } from "gatsby"

import "./Navbar.css"

function Navlink(props) {
    return <li><Link to={props.link}>{props.label}</Link></li>
}

const Navlinks = () => 
<ul class="Navlist">
    <Navlink link="/" label="Home"/>
    <Navlink link="/project" label="Project"/>
    <Navlink link="/resume" label="Resume"/>
    <br/>
</ul>

export default Navlinks