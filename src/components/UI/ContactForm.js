import React from 'react'
import { Form } from 'react-router-dom';
import { useState } from 'react';
import Input from './Input';
import classes from './ContactForm.module.css'  
const ContactForm = () => {
  // state management

  const [prenom,setPrenom] = useState("");
  const [nom,setNom] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const handleChangePrenom = (e) => {
    setPrenom(e.target.value);
  }
  const handleChangeNom = (e) => {
    setNom(e.target.value);
  }
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // Convert FormData to an object
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    console.log(formDataObject);

  }

  

  return (
    // <div>
    //     <div>
    //         <Form onSubmit={handleSubmit}> 
    //             <Input type='text' label='Prenom'  id ='prenom' value={prenom} required onChange={handleChangePrenom} />
    //             <Input type='text' label='Nom'  id ='nom' value={nom} required onChange={handleChangeNom}/>
    //             <Input type='email' label='email' id='email' value={email} required onChange={handleChangeEmail}/>
    //             <Input type='number' label='Numéro de Telephone' id='phone'value={phone} required onChange={handleChangePhone}/>
    //             <textarea type='text'/>
    //             <label> Comment pouvons-nous vous aider ?</label>
    //             <button type='submit' >Submit</button>
    //         </Form>
    //         <div>
    //             INFO
    //         </div>
    //     </div>
    // </div>
    <div className={classes.ContactPage}>
      <div className={classes.FormContainer} >
          <Form onSubmit={handleSubmit}>
            <label htmlFor='prenom'>Prenom</label>
            <input type='text' id='prenom' name='prenom' value={prenom} required onChange={handleChangePrenom} />

            <label htmlFor='nom'>Nom</label>
            <input type='text' id='nom' name='nom' value={nom} required onChange={handleChangeNom} />

            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' value={email} required onChange={handleChangeEmail} />

            <label htmlFor='phone'>Numéro de Téléphone</label>
            <input type='number' id='phone' name='phone' value={phone} required onChange={handleChangePhone} />

            <textarea id='comment' name='comment' placeholder="Comment pouvons-nous vous aider?" />

            <button type='submit'>Submit</button>
          </Form>
        </div>
        <div className={classes.InfoSection}>
          <div>
            <h2>INFO :</h2>
            <div>
              <p>Email : </p>
              <p>
                  <a href="mailto:Thabet.boubaker@gmail.com">Thabet.boubaker@gmail.com</a>
              </p>
            </div>
            <div>
              <p>Phone :</p>
              <p>123456789</p>
            </div>
            <div>
              <p>Linkedin :</p>
              <p>profile name</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ContactForm