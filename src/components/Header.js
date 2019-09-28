import React from "react"

import Background from "../../content/resources/header-background.png"

import "./Header.css"

class Header extends React.Component {
    render() {
        return <div id="parent">
            <img src={Background} alt="Background"/>
            <h1>Vincent Huang</h1>
            <h2>Georgia Tech Computer Science</h2>
            <h3>Concentrations in Theory and Systems/ Architecture</h3>
        </div>
    }
}

export default Header