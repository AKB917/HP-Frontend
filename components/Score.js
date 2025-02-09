import React from "react";
import { useState } from "react";

/* const [score_1, setScore_1] = useState(0);
const [score_2, setScore_2] = useState(0);

if (props.spellpoint1 > props.spellpoint2) {
  setScore_1(score_1 + 1)
} else {
  setScore_2(score_2 + 1)
} */

function Score(props) {
  return (
    <div className="score">
      <h2>Score</h2>
      <div className="J1">
       {/*  <p>spellPower :{props.spellpoint1}</p> */}
      </div>
      <p>Vs</p>
      <div className="J2">
      {/*   <p>spellPower :{props.spellpoint2}</p> */}
      </div>
      <div>
       {/*  {score_1}<span>vs</span>{score_2} */}
      </div>
    </div>
  );
}

export default Score;
