
import user from '../assets/user.png'

const ContactCard = (props) => {
    const {id, name, email} = props.contact;
    return (
        <div className="item" key={id}>
            <img  className="ui avatar image" src={user} alt="user" />
        <div className="content">
            <div className="header">
                {name}
            </div>
            <div className="">
                {email}
            </div>
            <i style={{color:"red", marginTop:"7px"}}    className="trash alternate outline icon"></i>
        </div>
    </div>
    );
};

export default ContactCard;