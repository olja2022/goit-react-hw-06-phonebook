import css from './Contacts.module.css';
import { useSelector } from 'react-redux';
import { MarkupContacts } from './MarkupContacts';

export const Contacts = () => {
  
  const contacts = useSelector(store => store.storeContacts.stateContacts);
  const filter = useSelector(store => store.storeFilter.stateFilter);
  const filteredContacts = filter
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

 
  return (
    filteredContacts.length !== 0 && (
      <ul className={css.list}>
        {filteredContacts.map(({ name, number, id }) => {
          return (
            <MarkupContacts
              key={id}
              name={name}
              number={number}
              id={id}
            ></MarkupContacts>
          );
        })}
      </ul>
    )
  );
};
