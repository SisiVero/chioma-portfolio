import React from "react"
import { FaGithub, FaBehance, FaCodepen, FaTwitter } from "react-icons/fa6"

export default function Footer (){
    return(
        <footer>
           <a className="email" href="mailto:veronicaezezim@gmail.com">veronicaezezim@gmail.com</a> 
        
        <div className="footer">
            <a href="https://github.com/SisiVero" target="_blank" className="socials" rel="noreferrer"><FaGithub className="footer-icon"/></a>
            <a href="https://www.behance.net/sisivero" target="_blank" className="socials" rel="noreferrer"><FaBehance className="footer-icon"/></a>
            <a href="https://codepen.io/SisiVero" target="_blank" className="socials" rel="noreferrer"><FaCodepen className="footer-icon"/></a>
            <a href="https://twitter.com/Sisiivero" target="_blank" className="socials" rel="noreferrer"><FaTwitter className="footer-icon"/></a>

        </div>
        
        </footer>
    )
}