import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classes from './TopHeader.module.css';


const TopHeader = () => {

  console.log(useLocation())
  
  return (
    <header>
      <nav className={classes.Header}>
        <h2> Bienvenue sur la plateforme TCF Canada </h2>
        <ul className={classes.list}>
        <li>
            <NavLink
            exact
              to="/homePage"
              className={classes.link}
              activeClassName ={classes.activeLink}
            >
              Aceuil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/formations"
              className={classes.link}
              activeClassName ={classes.activeLink}
            >
              Formations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tarifs"
              className={classes.link}
              activeClassName ={classes.activeLink}
            >
              Tarifs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ContactPage"
              className={classes.link}
              activeClassName ={classes.activeLink}
            >
              Contacter-Nous
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/loginPage"
              className={classes.link}
              activeClassName ={classes.activeLink}
            >
              Se Connecter
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default TopHeader;
