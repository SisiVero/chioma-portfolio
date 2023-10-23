import React from "react"
import { Link as ScrollLink } from 'react-scroll';
export default function WhatIDo(){
    return(
        <div className="what-i-do" id="services">
            <h1 className="w-text">What I do</h1>
            <hr />
            <div className="services">
            
            <div className="design">
            <h3 className="w-header">Design</h3>
            <p className="w-body-text">I create beautiful and intuitive web apps, meaning I design with 
                both aesthetics and usability in mind. 
                You will get your designs delivered as Figms files, as websites or both.

            </p>
            </div>

            <div className="development">
            <h3 className="w-header"> Development</h3>
            <p className="w-body-text">I am a website Frontend Developer with a specialoty in React.js.
                I also have a solid grip of the fundamentals of web development using HTML, 
                CSS, Js and React.js.
            </p>
            </div>
            </div>

          <ScrollLink to="projects"><button className="w-btn">MY PROJECTS</button></ScrollLink>  
        </div>
    )
}