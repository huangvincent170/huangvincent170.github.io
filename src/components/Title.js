import React from "react"

import "./Title.scss"

class Title extends React.Component {
    render() {
        return (
            <div className="title-wrapper">
            <div className="title-main">
                <h3 className="title-hello">Hi, my name is</h3>
                <h1 className="title-name">Vincent Huang</h1>
                <div className="title-description-wrapper">
                    <p className="title-description">
                    I'm studying Computer Science and Math at Georgia Tech.
                    </p>
                </div>
            </div>
            </div>
            
        );
    }
}

export default Title