import React from "react";
import styles from "../styles/joueur1.module.css";
import Image from "next/image";

function Joueur_2(props) {
  return (
    <div>
      <div className={styles.joureur}>
        <p> name of spell :{props.name}</p>
        <p> description of spell :{props.description}</p>
        <Image src="/sorcier1.png" alt="avatar" height={100} width={100} />
        <span className={styles.sort}></span>
        <button>Nouveau sorts</button>
      </div>
    </div>
  );
}

export default Joueur_2;
