import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./CreateBook.css";

const CreateBook = ({ setOpenModal }) => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState(2021);
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { title, year, author, description, image };
    fetch("http://localhost:8000/book/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    })
      .then(() => {
        history.go("/");
        setOpenModal(false);
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Year</label>
        <input
          type="number"
          min="1900"
          max="2099"
          required
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />

        <label>Author</label>
        <input
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        {/* //TODO */}
        <label>Book image URL</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label>Book Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button>Add Book</button>
      </form>
    </div>
  );
};

export default CreateBook;
