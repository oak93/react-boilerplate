import React from 'react';
import styles from '@/styles/app.module';

const App = () => (
  <div>
    <h1 data-test="test attr" className={styles.red}>Hello React</h1>
  </div>
);

export default App;
