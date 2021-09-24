import React from "react";
import { Link } from "react-router-dom";

import { Wrapper, Content, LogoImg } from "./header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/">
        <LogoImg src="/images/logo.png" />
      </Link>
    </Content>
  </Wrapper>
);

export default Header;
