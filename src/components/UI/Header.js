import React from 'react';
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.webp'

const Header = () => {
    return (
        <header>
          <nav className={classes.header}>
            <img src={Logo}/>
            <ul className={classes.list}>
              <li>
                <NavLink
                  to="/expression-ecrite"
                  className={classes.link}
                  activeClassName={classes.active}
                >
                  Expression Ecrite
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/expression-orale"
                  className={classes.link}
                  activeClassName={classes.active}
                >
                    Expression Orale
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/comprehension-ecrite"
                  className={classes.link}
                  activeClassName={classes.active}
                >
                  Comprehension Ecrite
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/comprehension-orale"
                  className={classes.link}
                  activeClassName={classes.active}
                >
                  Comprehension Orale
                </NavLink>
              </li>
            </ul>
          </nav>
          
        </header>
      );
}

export default Header