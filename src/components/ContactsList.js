import react from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactsList = (props) => {
    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard key={contact.id} contact={contact} deleteHandler={props.deleteHandler}/>
        );
    })
    return (
        <div className="ui celled list container">
            <div className="ui container">
                <h1>Your Contacts
                    <Link to="/..">
                        <button className="ui button" style={{float:"right"}}>Return</button>
                    </Link>
                </h1>
                <p></p>
            </div>
            {renderContactList}
        </div>
    );
}

export default ContactsList;