import React from "react"

export default function About(){
    return(
<div className="about-div">
<div className="about-details">
        <h1 className="about-text">Who I am</h1>
        <p className="about-header">Front-End Developer and Dog lover from Anambra state, Nigeria</p>
        
        <p className="about-body-text">I'm a web developer and designer based in Anambra stae, Nigeria. I love building apps that solve real-world problems, and that are delightful to use. 
            My specialities include Vanilla CSS and React JS.</p>
        <p className="about-body-text bottom">My background is in teaching and communication, and I have a Higher National Degree degree in Mass Communication from Institue of Management and Technology, Enugu. 
            I also have two adorable dogs, in my head 😊.
            </p>
            </div>

            <img className="about-image" src="./about.jpg" alt="Veronica Standing and smiling" />
</div>

    )
}