import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header as Navbar } from 'native-base';

import useContextValue from '../../Context/Context';

const Header = () => {
  const [{ user }] = useContextValue();

  return (
    <Container>
      <Navbar>Welcome {user.email} </Navbar>
    </Container>
  );
};

Header.defaultProps = {};
Header.propTypes = {};

export default Header;
