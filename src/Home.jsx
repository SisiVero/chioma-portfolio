import React from "react"
import Introduction from "./Introduction"
import Projects from "./Projects"
import WhatIDo from "./WhatIDo"
import About from "./About"

export default function Home(){
    return(
        <div id="/">
        <Introduction />
        <WhatIDo />
        <About />
        <Projects />
        </div>
    )
} 