import React, { useState } from "react";
import answers from "./answers";
import "./EightBall.css";

const EightBall = () => {
    const [color, setColor] = useState("black");
    const [text, setText] = useState("Think of a Question");
    
    const newBall = () => {
        let rand = Math.floor(Math.random() * answers.length);
        let newAnswer = answers[rand];
        setColor(newAnswer.color);
        setText(newAnswer.msg);
    }
    return(
        <div id="EightBall" className = {color}  onClick={newBall}>
            <p className="EightBall-text">{text}</p>
        </div>
    )
};

export default EightBall;