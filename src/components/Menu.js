import react from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div className="ui text container">
            <div className="ui item" style={{marginTop: "10px"}}>
                <Link to="/add">
                    <button className="ui button green center" style={{width: "100%"}}>
                        <p>Add Contact</p>
                    </button>
                </Link>
            </div>
            <div className="ui item" style={{marginTop: "10px"}}>
                <Link to="/contacts">
                    <button className="ui button blue center" style={{width: "100%"}}>
                        <p>Contacts list</p>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Menu;