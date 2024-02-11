import React from 'react'
import classes from './Card.module.css'

const Card = ({title,price,nbrSeances,niveau,contenu}) => {
  return (
    <div className={classes.pricingCard}>
        <header>
            <p className={classes.title}>{title}</p>
            <h1 className={classes.price}>{price}</h1>
            
        </header>
        <div className={classes.features}>
                <div className={classes.nbrSeances}>Nombre de Séances : {nbrSeances} / semaines</div>
                <div className={classes.niveau}>Niveau : {niveau} </div>
                <div className={classes.contenu}>
                    <p>Contenu:</p>
                    <ul>
                        {contenu.map((item, index) => (
                        <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
        </div>
        <button className={classes.btn}> choose </button>
    </div>
  )
}

export default Card