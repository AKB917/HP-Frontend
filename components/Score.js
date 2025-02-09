import React from "react";
import { useState, useEffect } from "react";

function Score({spellpoint1, spellpoint2}) {

const [score_1, setScore_1] = useState(0);
const [score_2, setScore_2] = useState(0);

useEffect(() => {
  if (spellpoint1 > spellpoint2) {
    setScore_1(prevScore => prevScore + 1);
  } else {
    setScore_2(prevScore => prevScore + 1);
  }
}, [spellpoint1, spellpoint2]);

  return (
    <div className="score">
      <h2>Score</h2>
      <div className="J1">
        <p>spellPower :{spellpoint1}</p>
      </div>
      <p>Vs</p>
      <div className="J2">
        <p>spellPower :{spellpoint2}</p>
      </div>
      <div>
        {score_1}<span>vs</span>{score_2}
      </div>
    </div>
  );
}

export default Score;
