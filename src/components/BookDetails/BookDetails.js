import React from "react";
import { Container, Image, Title, Author, Details } from "./bookdetails.styles";
import { useParams } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
const BookDetails = () => {
  const { id } = useParams();
  const { data: d } = useFetch("http://localhost:8000/book/" + id);
  return (
    <Container>
      {d && (
        <>
          <Image src={d.image} alt={d.title} />
          <Title>{d.title}</Title>
          <Author> {d.author} </Author>
          <Details>{d.description}</Details>
        </>
      )}
    </Container>
  );
};

export default BookDetails;
