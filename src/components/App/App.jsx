import ContactList from "../ContactList/ContactList";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { getError, getIsLoading } from "../../redux/selectors";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import { fetchContacts } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <h1 className="title">My phonebook</h1>
      {isLoading && !error && <b>Request in progress...</b>}
      <div className="container">
        <div className="phone">
          <div>
            <ContactForm />
            <SearchBox />
            <ContactList />
          </div>
          <div className="bottom"></div>
        </div>
      </div>
    </>
  );
}

export default App;
