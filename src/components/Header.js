import react from "react";

const Header = () => {
    return (
        <div className="ui inverted menu" style={{display:"block", height:"8%"}}>
            <div className="ui container">
                <h2 className="header item">Contacts App</h2>
            </div>
            <div className="divider"> <p></p></div>
        </div>
    );
}

export default Header;