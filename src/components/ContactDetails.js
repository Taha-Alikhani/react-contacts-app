import react from "react";
import { Link, useLocation } from "react-router-dom";
import user from "../images/user.jpg";

const ContactDetails = (props) => {
    const location = useLocation();
    //console.log(location);
    const {id, name, number} = location.state.contact;
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">
                        {name}
                    </div>
                    <div className="description">
                        {number}
                    </div>
                </div>
            </div>
            <div className="centered-div" style={{display: 'flex',  justifyContent:'center'}}>
                <Link to="/contacts">
                    <button className="ui button blue">Go back</button>
                </Link>
            </div>
        </div>
    );
}

export default ContactDetails;