import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Body from "../components/Body"
import Terminal from "../components/Terminal"

import Title from "../components/Title"

const oldBody = (
    <Body>
        <h1>About</h1>
        <p>
            Hello! My name is Vincent Huang, and I'm currently a second year at Georgia Tech
            with a double major in Computer Science and Mathematics, along with concentrations
            in Artifical Intelligence, Computing Systems/Architectures, and Discrete Math.
        </p>
    </Body>
);

export default () => (
<Layout>
    {/*
    <Header includeMajor = {true}/>
    <Terminal text={[
        "Vincent.school", "Georgia Tech",
        "Vincent.GPA", "4.0",
        "Vincent.major", "[Computer Science, Mathematics]",
        "Vincent.cs.concentration", "[Artifical Intelligence, Computing Systems and Architectures]",
        "Vincent.math.concentration", "[Discrete Mathematics]",
        "Vincent.graduationDate", "May 2022"
    ]}/>
     */}
    <Title/>

</Layout>
)
