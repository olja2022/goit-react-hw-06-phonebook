import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterInStateContacts } from 'store/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(store => store.storeFilter.stateFilter);
  const getInput = ({ target: { value } }) => {
    dispatch(filterInStateContacts({ value }));
  };

  return (
    <div className={css.inputWrapper}>
      <label htmlFor="searchInput">Find contacts by name</label>
      <input
        id="searchInput"
        type="text"
        name="filter"
        onChange={getInput}
        value={filter}
      />
    </div>
  );
};
