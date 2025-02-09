import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Header from "./Header";
import Joueur_1 from "./Joueur_1";
import Joueur_2 from "./Joueur_2";
import Score from "./Score";

function Home() {
  const [spellsJ1, setSpellsJ1] = useState([]); //stock le sort fetchéééo du J1
  const [spellsJ2, setSpellsJ2] = useState([]);
  const [selectedSpellJ1, setSelectedSpellJ1] = useState(0); // après le clique stock la puissance du sort fetchéo
  const [selectedSpellJ2, setSelectedSpellJ2] = useState(0); // et permet le calcul du score
  const [score_1, setScore_1] = useState(0); // après clique mise a jour ou pas du compteur
  const [score_2, setScore_2] = useState(0);
  console.log(selectedSpellJ1);
  console.log(selectedSpellJ2);

  //Joueur 1 fetch sort aléatoire
  useEffect(() => {
    fetch("http://localhost:3000/spells/")
      .then((response) => response.json())
      .then((data) => {
        const spell1 = [data];
        setSpellsJ1(spell1);
      });
  }, []);

  //Joueur 2 fetch sort aléatoire
  useEffect(() => {
    fetch("http://localhost:3000/spells/")
      .then((response) => response.json())
      .then((data) => {
        const spell2 = [data];
        setSpellsJ2(spell2);
      });
  }, []);

  //si J1 et J2 on cliqué alors comparaison des puissances de sort puis remise a zero du sort stocké et chargement du sort suivant
  useEffect(() => {
    if (selectedSpellJ1 && selectedSpellJ2) {
      if (selectedSpellJ1 > selectedSpellJ2) {
        setScore_1((prevScore) => prevScore + 1);
      } else if (selectedSpellJ1 < selectedSpellJ2) {
        setScore_2((prevScore) => prevScore + 1);
      } else {
        console.log("égalité");
      }
      setSelectedSpellJ1(null);
      setSelectedSpellJ2(null);
      reloadJ1();
      reloadJ2();
    }
  }, [selectedSpellJ1, selectedSpellJ2]);

  //fonction reload de sort aléatoire J1
  const reloadJ1 = () => {
    fetch("http://localhost:3000/spells/")
      .then((response) => response.json())
      .then((data) => {
        const spell1 = [data];
        setSpellsJ1(spell1);
      });
  };

  //fonction reload de sort aléatoire J2
  const reloadJ2 = () => {
    fetch("http://localhost:3000/spells/")
      .then((response) => response.json())
      .then((data) => {
        const spell2 = [data];
        setSpellsJ2(spell2);
      });
  };

  //click button J1
  const spellClickJ1 = (spell) => {
    setSelectedSpellJ1(spell);
  };

  //click button J2
  const spellClickJ2 = (spell) => {
    setSelectedSpellJ2(spell);
  };

  return (
    <div>
      <main className={styles.main}>
        <Header />
        <div className={styles.content}>
          <h1 className={styles.title}>L'heure du dudududu duueeeeeel</h1>
          <div className={styles.middle}>
            {spellsJ1.map((data, i) => (
              <Joueur_1
                onSpellClick={spellClickJ1}
                key={i}
                name={data.name}
                description={data.description}
                spellpoint1={data.spellpoint}
              />
            ))}
            <Score score_1={score_1} score_2={score_2} />
            {spellsJ2.map((data, i) => (
              <Joueur_2
                onSpellClick={spellClickJ2}
                key={i}
                name={data.name}
                description={data.description}
                spellpoint2={data.spellpoint}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
