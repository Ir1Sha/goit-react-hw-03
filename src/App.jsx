import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { nanoid } from 'nanoid';

import './App.css';

const App = () => {
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
  ];

  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });

  const [filter, setFilter] = useState('');

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContact = ({ name, number }) => {
    const duplicate = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (duplicate) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = { id: nanoid(), name, number };
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );

    setFilter('');
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox filter={filter} onChange={(e) => setFilter(e.target.value)} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
