import React from 'react'
import Card from '../UI/Card'
import classes from './PricingPage.module.css'
import { useState } from 'react'


const PricingPage = () => {

    const [selectMonthly,setselectMonthly] = useState(true);
    console.log(selectMonthly)


  return (
    <div className={classes.pricingPage}>
        <div className={classes.container}>
            <header>
                <h1 className={classes.topic}>Nos Tarifs</h1>
                <div className={classes.row}>
                    <p>Annuel</p>
                    <label className={classes.switch}>
                        <input className={classes.checkbox} onChange = {() => {setselectMonthly((prev) => !prev)}} type='checkbox'/>
                        <div className={classes.slider}> </div>
                    </label>
                    <p>monsuel</p>
                </div>
            </header>   
            <div className={classes.cards }> 
                <Card title="Essentiel" price={selectMonthly ? '30 DT' : '300 DT'} nbrSeances={2}  niveau={'c1/c2 (avancé)'} contenu={['exercices', 'correction','redaction']}/>
                <Card title="Standard" price={selectMonthly ? '50 DT' : '500 DT'} nbrSeances={3}  niveau={'c1/c2 (avancé)'} contenu={['exercices', 'correction','redaction','compréhension écrite','compréhension orale']}/>
                <Card title="Premium" price={selectMonthly ? '60 DT' : '600 DT'} nbrSeances={4}  niveau={'c1/c2 (avancé)'} contenu={['exercices', 'correction','redaction','compréhension écrite','compréhension orale', 'QCM' , 'Extraits de TCF']}/>
            </div>
        </div>
    </div>
  )
}

export default PricingPage