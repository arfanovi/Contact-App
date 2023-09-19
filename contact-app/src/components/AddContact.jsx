

import React from "react";



class AddContact extends React.Component{



    state = {
        name: "",
        email: "",
    };

    add = (e) =>{
        e.preventDefault();
        if(this.state.name === "" && this.state.email === ""){
            alert("All the fields are mandatory!")
            return;
        }
        this.props.addContactHandler(this.state)
        this.setState({name: "", email: ""})
    };

    render(){

    return (
        <div className="ui segment pl ">
            <div className='ui main  ui segment center aligned'>
                <h2>Add Contact</h2>
                <form className='ui from  ui segment center aligned' onSubmit={this.add}>
                    <div className='field ui segment m5'>
                        <label htmlFor="">Name</label>
                        <input type="text" name='name' placeholder='Enter Your Name' 
                        value={this.state.name}
                        onChange={(e) => this.setState({name: e.target.value })}
                        />
                    </div>
                    <div className='field ui segment m5'>
                        <label htmlFor="">Email</label>
                        <input type="email" name='email' placeholder='Enter Your Email'
                         value={this.state.email}
                         onChange={(e) => this.setState({email: e.target.value })}
                        />
                    </div>
                    <button className="ui button blue ui segment m5">Add</button>
                </form>

            </div>
        </div>
    );
}
}
export default AddContact;