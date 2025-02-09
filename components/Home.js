import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Header from "./Header";
import Joueur_1 from "./Joueur_1";
import Joueur_2 from "./Joueur_2";
import Score from "./Score";

function Home() {

  const [spellsJ1, setSpellsJ1] = useState({});
  const [spellsJ2, setSpellsJ2] = useState({});
 
  useEffect(() => {
    fetch("http://localhost:3000/spells/")
      .then((response) => response.json())
      .then((data) =>  {
        setSpellsJ1(data),
        setSpellsJ2(data)
      });
  }, []);


 /*  let spellJ1 = [];
  let spellJ2 = []; */

  spellsJ1.map((data, i) => {
    return <Joueur_1 key={i} name={data.name} description={data.description} spellpoint1={data.spellpoint}/>;
  });

  spellsJ2.map((data, i) => {
    return <Joueur_2 key={i} name={data.name} description={data.description} spellpoint2={data.spellpoint}/>;
  });

  return (
    <div>
      <main className={styles.main}>
        <Header />
        <div className={styles.middle}>
          <h1 className={styles.title}>L'heure du dudududu duueeeeeel</h1>
          <Joueur_1/>
          <Score/>
          <Joueur_2/>
        </div>
      </main>
    </div>
  );
}

export default Home;
