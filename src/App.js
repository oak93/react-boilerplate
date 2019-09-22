import React from 'react';
import PropTypes from 'prop-types';
import styles from '@/styles/app.module';

const App = (props) => (
  <div>
    <h1 data-test="test attr" className={styles.red}>Hello React, {props.test}</h1>
  </div>
);

export default App;

App.propTypes = {
  test: PropTypes.string,
}
