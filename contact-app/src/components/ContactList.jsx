
import PropTypes from 'prop-types';
import ContactCard from './ContactCard';

const ContactList = (props) => {

 


    const renderContactList = props.contacts.map((contact) => {
        return (
           <ContactCard contact={contact}  ></ContactCard>
        );
    });

    return (
        <div className="ui celled list ui segment background skyblue">
            <h2 className="ui segment center aligned">Contact List</h2>
            {renderContactList}
        </div>
    );
};




ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired
            // Add other properties as needed
        })
    ).isRequired
};

export default ContactList;
