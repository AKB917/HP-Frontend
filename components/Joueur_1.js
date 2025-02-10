import React from "react";
import styles from "../styles/joueur1.module.css";
import Image from "next/image";

function Joueur_1(props) {
  const handleClick = () => {
    props.onSpellClick(props.spellpoint1);
  };

  return (
    <div>
      <div className={styles.joueur}>
        <p> name of spell :{props.name}</p>
        <p> description of spell :{props.description}</p>
        <p> power of spell :{props.spellpoint1}</p>
        <Image src="/sorcier1.png" alt="avatar" height={100} width={100} />
        <span className={styles.sort}></span>
        <button className={styles.Button} onClick={() => handleClick()}>Nouveau sorts</button>
      </div>
    </div>
  );
}

export default Joueur_1;
