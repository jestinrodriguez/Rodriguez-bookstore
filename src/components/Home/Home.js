import React from "react";

import Books from "../Books/Books";
import Authors from "../Authors/Authors";
import Hero from "../Hero/Hero";

import { Container } from "./home.styles";

const Home = () => {
  return (
    <Container>
      <Hero />
      <Books />

      <Authors />
    </Container>
  );
};

export default Home;
