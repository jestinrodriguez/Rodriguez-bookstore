import React from "react";

import { Container, Author, Image, Details } from "./authordetails.styles";

import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const AuthorDetails = () => {
  const { id } = useParams();
  const { data: d } = useFetch("http://localhost:8000/author/" + id);

  return (
    <Container>
      {d && (
        <>
          <Author> {`${d.authorName} (${d.dateOfBirth})`} </Author>

          <Image src={d.image} alt={d.title} />
          <Details>{d.description}</Details>
        </>
      )}
    </Container>
  );
};

export default AuthorDetails;
