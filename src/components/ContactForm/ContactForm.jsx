import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;

    if (name.trim() === '' || number.trim() === '') return;

    const isDuplicate = this.props.contacts.some(
      contact => contact.name === name
    );
    if (isDuplicate) {
      alert('Contact with this name already exists!');
      return;
    }

    this.props.onSubmit({ id: nanoid(), name, number });
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div className={css.container}>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="nameInput">
            Name
            <input
              type="text"
              name="name"
              id="nameInput"
              value={name}
              onChange={this.handleChange}
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
              onChange={this.handleChange}
              placeholder="Enter phone number"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
