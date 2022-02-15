import react from "react";
import lodash from 'lodash'
import { Link, Navigate } from "react-router-dom";

class AddContact extends react.Component {
    state = {
        name: "",
        number: "",
        redir: false
    }

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.number === "") {
            alert("Please fill in all fields");
        } else {
            const contact = {
                id: lodash.now(),
                name: this.state.name,
                number: this.state.number
            };
            this.props.addHandler(contact);
            this.setState({
                name: "",
                number: "",
                redir: true
            });
        }
    }
    
    render() {
        return (
            <div className="ui text container" onSubmit={this.add} >
                <h2>Add Contact</h2>
                <form className="ui form">
                    <div className="field">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value = {this.state.name}
                            onChange={(e)=>this.setState({ name: e.target.value })} />
                    </div>
                    <div className="field">
                        <label>Phone</label>
                        <input
                            type="text"
                            name="number"
                            placeholder="Phone"
                            value = {this.state.number}
                            onChange={(e)=>this.setState({ number: e.target.value })} />
                    </div>
                    <button className="ui button primary">Add Contact</button>
                    <Link to="/..">
                        <button className="ui button gray right">Return</button>
                    </Link>
                </form>
                { this.state.redir ? (<Navigate to="/"/>) : null }
            </div>
        );
    }
}

export default AddContact;