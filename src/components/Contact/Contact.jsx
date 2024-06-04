import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contacts({ id, name, phone }) {

    const dispatch = useDispatch();
    
    const handleDelete = () => {
        dispatch(deleteContact(id));
  };
  
  return (
    <div>
          <p>{name}</p>
          <p>{phone}</p>
      <button type='button' onClick={handleDelete}>Delete</button>
    </div>
  );
}