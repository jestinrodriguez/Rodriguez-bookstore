import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useHistory } from "react-router-dom";
import Modal from "../Modal/Modal";

import { Link } from "react-router-dom";

import { FaTimes, FaPlus } from "react-icons/fa";
import {
  Image,
  Container,
  Title,
  Author,
  PaperWrapper,
  Button,
  ButtonWrapper,
  TextContainer,
  PaperContainer,
} from "./bookgrid.styles";

import useFetch from "../../hooks/useFetch";

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(8);
  const [modalOpen, setModalOpen] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [currId, setCurrId] = useState(null);
  const [isBook, setIsBook] = useState(true);

  const { data } = useFetch("http://localhost:8000/book");

  // const handleChange = (event) => {
  //   setSpacing(Number(event.target.value));
  // };

  const history = useHistory();
  const deleteItem = (id) => {
    fetch("http://localhost:8000/book/" + id, {
      method: "DELETE",
    })
      .then(() => {
        history.go("/");
      })
      .catch((error) => alert(error));
  };

  //   const jsx = `
  // <Grid container spacing={${spacing}}>
  // `;

  return (
    <>
      <Grid sx={{ flexGrow: 1 }} container spacing={8}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={spacing}>
            {data &&
              data.map((d, i) => (
                <Grid key={i} item>
                  <Paper sx={{ height: 352, width: 185 }}>
                    <PaperContainer>
                      <FaTimes
                        style={{
                          cursor: "pointer",
                          margin: "none",
                          position: "relative",
                          zIndex: 1,
                          top: 3,
                          left: 160,
                        }}
                        onClick={() => deleteItem(d.id)}
                      />
                      <Link to={`/book/detail/${d.id}`}>
                        <Container>
                          <Image src={d.image} alt={d.title} />
                          <TextContainer>
                            <Title>{`${d.title} (${d.year})`}</Title>
                            <Author>{d.author}</Author>
                          </TextContainer>
                        </Container>
                      </Link>
                      <ButtonWrapper className="test">
                        <Button
                          onClick={() => {
                            setModalOpen(true);
                            setIsCreating(false);
                            setIsUpdating(true);
                            setCurrId(d.id);
                          }}
                        >
                          Edit
                        </Button>
                      </ButtonWrapper>
                    </PaperContainer>
                  </Paper>
                </Grid>
              ))}

            <PaperWrapper>
              <Paper
                className="paper"
                sx={{ height: 352, width: 185 }}
                onClick={() => {
                  setModalOpen(true);
                  setIsCreating(true);
                  setIsUpdating(false);
                  setIsBook(true);
                }}
              >
                <FaPlus />
              </Paper>
            </PaperWrapper>
          </Grid>
        </Grid>
      </Grid>
      {modalOpen && (
        <Modal
          setOpenModal={setModalOpen}
          isCreating={isCreating}
          isUpdating={isUpdating}
          currId={currId}
          isBook={isBook}
        />
      )}
    </>
  );
}
