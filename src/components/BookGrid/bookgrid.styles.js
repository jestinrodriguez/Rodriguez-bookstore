import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  height: 150px;
  width: 100px;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 4px 4px grey;
`;

export const Title = styled.h1`
  font-size: 20px;
  color: black;
  padding-bottom: 300px;
  padding: 10px;
`;

export const TextContainer = styled.div`
  width: 100%;
  flex-direction: column;
  padding-top: 15px;
`;

export const Author = styled.h2`
  font-size: 1em;
  color: black;
  padding-left: 10px;
`;

export const PaperWrapper = styled.div`
  padding-top: 65px;
  padding-left: 60px;
  left: auto;
  &:hover {
    transform: scale(1.1);
  }

  .paper {
    border: 4px dashed #1c6ea4;
    opacity: 0.25;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Button = styled.button`
  position: relative;
  background-color: #e16a00;
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 0;
  cursor: pointer;
  border-radius: 12px;
  margin: 5px;
  justify-content: flex-end;
  display: flex;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ButtonWrapper = styled.div``;

export const PaperContainer = styled.div`
  position: relative;
  flex-direction: column;
  height: 352px;
  width: 185px;
  box-shadow: 0px 4px 4px grey;
  background-color: white;
  border-radius: 4px;
  &:hover {
    transform: scale(1.1);
  }

  .test {
    position: absolute;
    bottom: 5px;
    left: 60px;
  }
`;
