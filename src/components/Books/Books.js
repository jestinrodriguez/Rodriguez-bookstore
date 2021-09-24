import { Wrapper, Heading } from "./books.styles";
import BookGrid from "../BookGrid/BookGrid";

const Books = () => {
  return (
    <Wrapper>
      <Heading>Books</Heading>
      <BookGrid />
    </Wrapper>
  );
};

export default Books;
