import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import styles from "@/styles/app.module.scss";

const Header = styled.h1`
  color: #155724;
`;

const App = props => (
  <Header data-test="test-app" className={styles.border}>
    Hello from web-ui-react-boilerplate 👋
  </Header>
);

export default App;

App.propTypes = {
  test: PropTypes.string
};
