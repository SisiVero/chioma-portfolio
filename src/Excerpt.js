import React from "react"

export default function Excerpt({text, wordCount}){
    const words = text.split(' ');

    const excerpt = words.slice(0, 10).join(' ')
  
    
    return(
        <>
    {excerpt} {words.length > wordCount ? " see more ": ''}
        
        </>
    )
}