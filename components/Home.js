import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Header from "./Header";
import Joueur_1 from "./Joueur_1";
import Joueur_2 from "./Joueur_2";
import Score from "./score";

function Home() {
  const [spell, setSpell] = useState([]);
  const [score_1, setScore_1] = useState(0);
  const [score_2, setScore_2] = useState(0);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/spells/") // a remplacer par la route get backend
      .then((response) => response.json())
      .then((data) => setSpell(data));
  }, []);

  const spells_joueur_1 = spell.map((data, i) => {
    return <Joueur_1 key={i} name={data.name} description={data.description} />;
  });

  const spells_joueur_2 = spell.map((data, i) => {
    return <Joueur_2 key={i} name={data.name} description={data.description} />;
  });

  return (
    <div>
      <main className={styles.main}>
        <Header />
        <div className={styles.middle}>
          <h1 className={styles.title}>L'heure du dudududu duueeeeeel</h1>
          <joueur_1/>
          {spells_joueur_1}
          <Score/>
          {spells_joueur_2}
        </div>
      </main>
    </div>
  );
}

export default Home;
