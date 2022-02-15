import react from "react";
import { Link } from "react-router-dom";

const ContactCard = (props) => {

    const deleteContact = (e) => {
        e.preventDefault();
        props.deleteHandler(props.contact.id);
    }

    const {id, name, number} = props.contact;
    return (
        <div className="item" key={id}>
                <i className="large middle aligned icon user" />
                <div className="content">
                    <Link to={`/contacts/${id}`} state={{contact: props.contact}} >
                        <div className="header">{name}</div>
                    </Link>
                    <div className="description">{number}</div>
                </div>
                <i
                    className="trash alternate outline icon"
                    style={{ cursor: "pointer", marginTop: "10px" }}
                    onClick={(e) => props.deleteHandler(props.contact.id)}
                ></i>
        </div>
    );
}

export default ContactCard;