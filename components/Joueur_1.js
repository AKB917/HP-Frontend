import React from 'react'
import styles from '../styles/joueur1.module.css'
import Image from 'react'

function Joueur_1(props) {


  
  return (
    <div>
      <div className={styles.joureur}>
        <p> name of spell :{props.name}</p>
        <p> description of spell :{props.description}</p>

    <Image src='../public/sorcier1.png' alt='avatar'/>
    <span className={styles.sort}></span>
    <button>Nouveau sorts</button>
    </div>
    </div>
  )
}

export default Joueur_1