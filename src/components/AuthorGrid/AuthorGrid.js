import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { experimentalStyled as expstyled } from "@mui/material/styles";
import { useHistory, Link } from "react-router-dom";
import { FaTimes, FaPlus, FaEdit } from "react-icons/fa";
import Modal from "../Modal/Modal";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import {
  Image,
  Wrapper,
  ItemWrapper,
  Text,
  ButtonWrapper,
  ItemContainer,
} from "./authorgrid.styles";

import useFetch from "../../hooks/useFetch";

const Item = expstyled(Paper)(({ theme }) => ({
  width: 300,
  height: 76,
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [currId, setCurrId] = useState(null);
  const [isAuthor, setIsAuthor] = useState(true);

  const { data } = useFetch("http://localhost:8000/author");

  const history = useHistory();

  const deleteItem = (id) => {
    fetch("http://localhost:8000/author/" + id, {
      method: "DELETE",
    })
      .then(() => {
        history.go("/");
      })
      .catch((error) => alert(error));
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 6, md: 6 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
          paddingLeft={{ xs: 12 }}
          paddingTop={{ xs: 6 }}
        >
          {data &&
            data.map((d, i) => (
              <Grid item xs={2} sm={4} md={4} key={i}>
                <Item>
                  <ItemContainer>
                    <Link to={`/author/detail/${d.id}`}>
                      <Wrapper>
                        <Image src={d.image} alt={d.authorName} />
                        <Text>{d.authorName}</Text>
                      </Wrapper>
                    </Link>
                    <ButtonWrapper>
                      <FaEdit
                        style={{
                          position: "relative",
                          top: 12,
                          right: 16,
                          cursor: "pointer",
                          fontSize: 20,
                          opacity: 0.75,
                        }}
                        onClick={() => {
                          setModalOpen(true);
                          setIsCreating(false);
                          setIsUpdating(true);
                          setCurrId(d.id);
                        }}
                      />
                      <FaTimes
                        style={{
                          position: "relative",
                          top: 12,
                          right: 9,
                          cursor: "pointer",
                          fontSize: 20,
                          opacity: 0.75,
                        }}
                        onClick={() => deleteItem(d.id)}
                      />
                    </ButtonWrapper>
                  </ItemContainer>
                </Item>
              </Grid>
            ))}

          <ItemWrapper>
            <Item
              className="item"
              onClick={() => {
                setModalOpen(true);
                setIsCreating(true);
                setIsUpdating(false);
                setIsAuthor(true);
              }}
            >
              <FaPlus />
            </Item>
          </ItemWrapper>
        </Grid>
      </Box>
      {modalOpen && (
        <Modal
          setOpenModal={setModalOpen}
          isCreating={isCreating}
          isUpdating={isUpdating}
          currId={currId}
          isAuthor={isAuthor}
        />
      )}
    </>
  );
}
