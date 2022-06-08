import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './style.module.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>Kaye</p>
        <a class={styles.link} href="/home">
          Home
        </a>
      </header>
    </div>
  );
};

export default App;
