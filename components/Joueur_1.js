import React from 'react'
import styles from '../styles/joueur1.module.css'
import Image from 'next/image';


function Joueur_1(props) {



  return (
    <>
      <div className={styles.joueur}>
        <Image src='/sorcier1.png' alt='avatar' width={400} height={314} />
        <div className={styles.spelldata}>          
            <h4>{props.name}</h4>          
            <h4>{props.description}</h4>          
        </div>
          <button ClassName={styles.Button}>Nouveau sorts</button>
      </div>
    </>
  )
}

export default Joueur_1