// import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';

import BackAndForward from '../BackAndForward';
import SearchBar from '../SearchBar';

const Header = () => (
  <OuterWrapper>
      <BackAndForward />
      
      {/*<UserMenu>
      
      </UserMenu>*/}

      <SearchBar />

      {/*<ThreeDotsMenu />      */}
  </OuterWrapper>
);

const OuterWrapper = styled.div`
  height: 50px;
  width: 100vw;
  color: white;
  background-color: #333;
  display: grid;
  grid-template-columns: 10rem 1fr 1fr 10rem;
  grid-template-rows: auto;
`

export default Header;