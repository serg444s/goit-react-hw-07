import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts, selectNameFilter } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectNameFilter);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <div className={css.div}>
      <ul className={css.list}>
        {visibleContacts.map((contact) => {
          return (
            <li key={contact.id} className={css.item}>
              <Contact contact={contact} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
