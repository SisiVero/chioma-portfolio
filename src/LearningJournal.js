import React from "react"
import {FaGithub, FaEye} from "react-icons/fa6"
export default function LearningJournal(){
    return(
        <div className="password-gen-cont projects">
        <div className="project-details">
        
        <div className="project-text">
        <p className="project-name">Learning<strong> Journal</strong></p>
        <p className="project-language">HTML AND CSS</p>
        </div>
        </div>
        <img src="./password-generator.jpg" alt="Password Generator" className="password-gen-image projects-image"/>
        <div className="project-links">
            <div className="external-link">
            <FaGithub className="link-icon"/>
            <a href="https://github.com/SisiVero/learning-journal" target="_blank" rel="noreferrer" className="link">
                
                 Github repo </a></div>

                 <div className="external-link">   
                 <FaEye className="link-icon"/> 
                    <a href="https://visionary-semolina-39567a.netlify.app"
                    target="_blank" rel="noreferrer" className="link"> 
                    
                    Live version </a></div>
        </div>
        
        </div>
    )
}