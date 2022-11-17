import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormAddContact } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import {
  Container,
  Card,
  ContactsCard,
  ContactsTitle,
} from './Contacts.styled';

export default function Contacts() {
  return (
    <Container>
      <Card>
        <FormAddContact />
      </Card>

      <ContactsCard>
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter />
        <ContactList />
      </ContactsCard>
      <ToastContainer autoClose={2000} theme="colored" />
    </Container>
  );
}
