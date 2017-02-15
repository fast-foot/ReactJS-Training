import React, { Component } from 'react';
import Dropdown from './Dropdown';
import Header from './Header';
import RegistrationForm from './RegistrationForm';

import { css } from 'aphrodite/no-important';
import styles from './AppStyles';

import './App.css';

const menu = [
  {
    link: '/articles',
    label: 'Articles'
  },
  {
    link: '/contacts',
    label: 'Contacts'
  },
  {
    link: '/posts',
    label: 'Posts'
  }
];

class App extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <Header items={menu}/>
        <Dropdown />
        <RegistrationForm />
        <div className={css(styles.square)}></div>
      </div>
    );
  }
}

export default App;
