import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const ContactForm = ({ onSubmit, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (name.trim() === '' || number.trim() === '') return;

    const isDuplicate = contacts.some(contact => contact.name === name);
    if (isDuplicate) {
      alert('Contact with this name already exists!');
      return;
    }

    onSubmit({ id: nanoid(), name, number });
    setName('');
    setNumber('');
  };

  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nameInput">
          Name
          <input
            type="text"
            name="name"
            id="nameInput"
            value={name}
            onChange={handleChange}
            placeholder="Enter name"
            required
          />
        </label>
        <label htmlFor="numberInput">
          Phone number
          <input
            type="tel"
            name="number"
            id="numberInput"
            pattern="^[0-9]{1,3}[-\s]?[0-9]{1,14}$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
