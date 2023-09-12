import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, selectFilter } from '../redux/filterSlice'; // Імпортуйте дії та селектори зі slice

import { StyledAppWrapper } from 'App.styled';
import ContactForms from './ContactForms/ContactForms';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const filter = useSelector(selectFilter); // Отримуємо значення фільтру зі Store
  const dispatch = useDispatch();

  const changeFilterData = event => {
    const { value } = event.currentTarget;
    dispatch(setFilter(value)); // Діспатчимо дію для оновлення значення фільтру в Redux Store
  };

  return (
    <>
      <StyledAppWrapper>
        <h1>Phonebook</h1>
        <ContactForms />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilterData} />
        <ContactList />
      </StyledAppWrapper>
    </>
  );
};

export default App;
