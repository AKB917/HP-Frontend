import React from "react";
import styles from '../styles/Score.module.css'

function Score({score_1, score_2}) {

  return (
    <div className={styles.score}>
      <h2>Score</h2>
      <div>
        {score_1}<span>vs</span>{score_2}
      </div>
    </div>
  );
}

export default Score;
