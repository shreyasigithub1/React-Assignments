// Create Skill component here to display your skills
// In this component there should be a list with each listitem as your skill.

import React from "react";
class Skill extends React.Component {
    render() {
        return (
            <div id="skill">
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Node</li>
                </ul>
                </div> 
        )
    }
}
export { Skill };