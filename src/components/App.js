import react, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header';
import AddContact from './AddContact';
import ContactsList from './ContactsList';
import Menu from './Menu';
import ContactDetails from './ContactDetails';


const LOCAL_CONTACT_STORAGE = "contacts";

function App() {
    const [contacts, setContacts] = useState([])

    const addHandler = (contact) => {
        setContacts([...contacts, contact]);
    };

    const deleteHandler = (id) => {
        setContacts(contacts.filter((contact) => contact.id !== id));
    };
    
    useEffect(() => {
        const contactsFromStorage = JSON.parse(localStorage.getItem(LOCAL_CONTACT_STORAGE));
        if (contactsFromStorage) {
            setContacts(contactsFromStorage);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_CONTACT_STORAGE, JSON.stringify(contacts));
    }, [contacts]);

    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Menu />}/>
                <Route path="/add" element={<AddContact addHandler={addHandler} />} />
                <Route path="/contacts" element={<ContactsList contacts={contacts} deleteHandler={deleteHandler}/>} />
                <Route path="/contacts/:id" element={<ContactDetails />} />
            </Routes>
            {/*<AddContact addHandler={addHandler}/>
            <ContactsList contacts={contacts} deleteHandler={deleteHandler}/> */}
        </Router>
  );
}

export default App;
