import React from 'react'
import styles from '../styles/joueur1.module.css'
import Image from 'next/image';

function Joueur_1(props) {


  
  return (
    <div>
      <div className={styles.joueur}>
        <p> name of spell :{props.name}</p>
        <p> description of spell :{props.description}</p>

    <Image src='/sorcier1.png' alt='avatar' width={600} height={314}/>
    <span className={styles.sort}></span>
    <button>Nouveau sorts</button>
    </div>
    </div>
  )
}

export default Joueur_1