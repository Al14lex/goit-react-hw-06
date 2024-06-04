import Contacts from "../Contact/Contact";
import { useSelector } from "react-redux"
import { selectContacts} from "../../redux//contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectNameFilter);

  const visibleContacts = contacts.filter((contact) => {
      if ("id" in contact && "name" in contact && "phone" in contact) {
        if (
          typeof contact.id === "string" &&
          typeof contact.name === "string" &&
          typeof contact.phone === "string"
        ) {
          return contact.name.toLowerCase().includes(filters.toLowerCase());
        }
      }
      return false;
    });

  return (
    <ul>
        {visibleContacts.map((contact) => {
          return (
          <li key={contact.id}>
              <Contacts id={contact.id} name={contact.name} phone={contact.phone}/>
          </li>
        )
      })}
    </ul>
  );
}