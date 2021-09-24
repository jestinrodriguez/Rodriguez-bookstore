import React from "react";
import "./Modal.css";

import { Background, Container, titleCloseBtn } from "./modal.styles.js";

import CreateBook from "../CreateBook/CreateBook";
import EditBook from "../EditBook/EditBook";

import CreateAuthor from "../CreateAuthor/CreateAuthor";
import EditAuthor from "../EditAuthor/EditAuthor";

function Modal({
  setOpenModal,
  isCreating,
  isUpdating,
  currId,
  isBook,
  isAuthor,
}) {
  return (
    <div className="modalBackground">
      <div className="container">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              className="btn"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
          {/* <div className="title">
          <h1>Are You Sure You Want to Continue?</h1>
        </div> */}
          {/* <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div> */}
          <div className="footer">
            {/* <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Close
          </button> */}

            {isBook && isCreating && <CreateBook setOpenModal={setOpenModal} />}
            {isBook && isUpdating && (
              <EditBook currId={currId} setOpenModal={setOpenModal} />
            )}

            {isAuthor && isCreating && (
              <CreateAuthor setOpenModal={setOpenModal} />
            )}
            {isAuthor && isUpdating && (
              <EditAuthor currId={currId} setOpenModal={setOpenModal} />
            )}
          </div>
        </div>
      </div>
    </div>
    // <Background>
    //   <Container>
    //     <titleCloseBtn>
    //       <button
    //         className="btn"
    //         onClick={() => {
    //           setOpenModal(false);
    //         }}
    //       >
    //         X
    //       </button>
    //     </titleCloseBtn>

    //     {isCreating && <CreateBook />}
    //     {isUpdating && <EditBook currId={currId} />}
    //   </Container>
    // </Background>
  );
}

export default Modal;
