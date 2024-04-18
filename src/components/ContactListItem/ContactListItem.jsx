import React from 'react';
import css from './ContactListItem.module.css';

const ContactListItem = ({ contact, onDeleteContact }) => {
  return (
    <li className={css.item}>
      <span className={css.name}>
        {contact.name}: {contact.number}
      </span>
      <button
        className={css.button}
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
