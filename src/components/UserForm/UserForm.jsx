import css from './UserForm.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addInStateContact } from '../../store/phoneBookSlice';
import { nanoid } from '@reduxjs/toolkit';

export const UserForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.storeContacts.stateContacts);
  const [userName, setUserName] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const getInput = ({ target: { name, value } }) => {
    if (name === 'name') {
      setUserName(value);
    } else {
      setUserNumber(value);
    }
  };

  const setContact = e => {
    e.preventDefault();

    const isExist = contacts.find(contact => contact.name === userName);

    if (isExist) {
      alert(`${userName} is already in contacts`);
    } else {
      const isCreated = dispatch(
        addInStateContact({
          name: userName,
          number: Number(userNumber),
          id: nanoid(),
        })
      );

      if (isCreated) {
        setUserName('');
        setUserNumber('');
      }
    }
  };

  return (
    <form className={css.addUserForm} onSubmit={setContact}>
      <div className={css.userFormWrapper}>
        <div className={css.inputWrapper}>
          <label className={css.formLabel} htmlFor="UserId">
            Name
          </label>
          <input
            className={css.formInput}
            id="UserId"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={getInput}
            value={userName}
          />
        </div>

        <div className={css.inputWrapper}>
          <label className={css.formLabel} htmlFor="number">
            Phone Number
          </label>
          <input
            className={css.formInput}
            id="number"
            onChange={getInput}
            value={userNumber}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>

        <button className={css.submitBtn} type="submit">
          Add contact
        </button>
      </div>
    </form>
  );
};
