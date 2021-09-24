import { useState, useEffect } from "react";
import "./EditBook.css";
const EditBook = ({ currId, setOpenModal }) => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    fetch("http://localhost:8000/book/" + currId).then((result) => {
      result.json().then((resp) => {
        setTitle(resp.title);
        setYear(resp.year);
        setAuthor(resp.author);
        setImage(resp.image);
        setDescription(resp.description);
      });
    });
  };

  const handleUpdate = () => {
    let item = {
      title,
      year,
      author,
      description,
      image,
    };
    fetch(`http://localhost:8000/book/${currId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        getUsers();
      });
    });
    // .catch((error) => alert(error));
  };

  return (
    <div className="create">
      {/* <h2>Create a new book</h2> */}
      <form onSubmit={handleUpdate}>
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

        <label>Image URL</label>
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

        <button>Edit Book</button>
      </form>
    </div>
  );
};

export default EditBook;
