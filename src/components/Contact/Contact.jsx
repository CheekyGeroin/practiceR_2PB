import { Component } from 'react';

export class Contact extends Component {
  render() {
    const { id, name, number } = this.props;
    return (
      <li>
        <p>
          {name}: {number}
        </p>
        <button type="button">Delete</button>
      </li>
    );
  }
}
