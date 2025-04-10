import React from "react";


function Links({ github, linkedin }) {
  return (
    <div>
      <h3>Links</h3>
      <ul>
        {github && (
          <li>
            <a href={github} target="_blank" rel="noopener noreferrer">
              {github}
            </a>
          </li>
        )}
        {linkedin && (
          <li>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              {linkedin}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Links;
