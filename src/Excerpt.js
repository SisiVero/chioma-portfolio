import React, { useState } from "react";

export default function Excerpt({ text, wordCount }) {
  const words = text.split(" ");

  const [expanded, setExpanded] = useState(false);

  const excerpt = expanded ? words.join(" ") : words.slice(0, wordCount).join(" ");

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {excerpt}
      {words.length > wordCount ? (
        <button onClick={toggleExpand}>
          {expanded ? "See less" : "See more"}
        </button>
      ) : (
        ""
      )}
    </>
  );
}
