import React from 'react';
import classes from '../UI/Main.module.css';
import cover from '../../assets/cover.jpg';

const MainContent = () => {
  return (
    <div className={classes.coverContainer}>
      <img className={classes.coverImage} src={cover} alt="Cover" />
      <div className={classes.overlayText}>
        <h1>Se préparer au TCF Canada</h1>
        <p>On vous garentit la meilleure préparation au TCF Canada</p>
        <p> Test Orales/Ecrits </p>
        <div className={classes.bottons}>
            <button className={classes.btn}> Comprehension Ecrite </button>
            <button className={classes.btn}> Comprehension Orale </button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
