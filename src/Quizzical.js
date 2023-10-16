import React from "react"
import {FaGithub, FaEye} from "react-icons/fa6"

export default function Quizzical(){
    return(
        <div className="password-gen-cont projects">
        <div className="project-details">
        
        <div className="project-text">
        <p className="project-name">Password<strong> Generator</strong></p>
        <p className="project-language">HTML, CSS AND JAVASCRIPT</p>
        </div>
        </div>
        <img src="./password-generator.jpg" alt="Password Generator" className="password-gen-image projects-image"/>
        <div className="project-links">
            <div className="external-link">
            <FaGithub className="link-icon"/>
            <a href="https://github.com/SisiVero/quizzical-app" target="_blank" rel="noreferrer" className="link">
                
                 Github repo </a></div>

                 <div className="external-link">   
                 <FaEye className="link-icon"/> 
                    <a href="https://cheery-parfait-37ad05.netlify.app"
                    target="_blank" rel="noreferrer" className="link"> 
                    
                    Live version </a></div>
        </div>
        
        </div>
    )
}