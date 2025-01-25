import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contactCard}>
          <div className={styles.contactAvatar}>👤</div>
          <div className={styles.contactInfo}>
            <p>{name}</p>
            <p>
              <span className={styles.phoneIcon}>📞</span>
              {number}
            </p>
          </div>
          <button
            className={styles.deleteButton}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
