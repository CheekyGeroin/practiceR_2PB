import { Contact } from 'components/Contact/Contact';
import { Component } from 'react';

export class ContactList extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <ul>
        {contacts.length > 1 &&
          contacts.map(({ id, name, number }) => (
            <Contact key={id} id={id} name={name} number={number} />
          ))}
      </ul>
    );
  }
}
