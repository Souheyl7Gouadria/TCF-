// LoginForm.js
import React, { useState } from 'react';
import { Form } from 'react-router-dom';
import classes from './LoginForm.module.css'; // Import the CSS file

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setError('');
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    setError('');
  }

  const handleSubmit = (e) =>{

    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

      if (!emailRegex.test(email)) {
        setError("Cette adresse e-mail n'est pas valide");
        return;
      }

      if (!passwordRegex.test(password)) {
        setError('le mot de passe doit contenir au moins 8 lettres , 1 caractére spécial.');
        return;
      }
      const formData = new  FormData(e.target);
      e.preventDefault();
      const userCredentials = {};
      formData.forEach((value,key) => {
        userCredentials[key] = value;
      })
      console.log(userCredentials)
      setEmail("");
      setPassword("");
    }catch(error) {
      setError('An error occurred. Please try again later.');
      console.error('Error:', error);
    }
      
  }
  return (
    <div className={classes.FormContainer}> 
      <div className={classes.effect}>
        <Form className={classes.form} onSubmit={handleSubmit}>
            <p>
              <label htmlFor='email'>Email</label>
              <input id='email' type='text' name='email' required value={email} onChange={handleChangeEmail}/>
            </p>
            <p>
              <label htmlFor='pwd'>Password</label>
              <input id='pwd' type='password' name='pwd' required value={password} onChange={handleChangePassword}    />
            </p>
            {error && <p className={classes.error}>{error}</p>}
            <button type="submit">Submit</button>
          </Form>
      </div>
    </div>
  );
}

export default LoginForm;
