import React from "react";
import AuthorGrid from "../AuthorGrid/AuthorGrid";

import { Wrapper, Heading } from "./authors.styles";

const Authors = () => {
  return (
    <Wrapper>
      <Heading>Authors</Heading>
      <AuthorGrid />
    </Wrapper>
  );
};

export default Authors;
