import { useState, useEffect } from "react";
import "./editAuthor.css";
const EditBook = ({ currId, setOpenModal }) => {
  const [authorName, setAuthorName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    fetch("http://localhost:8000/author/" + currId).then((result) => {
      result.json().then((resp) => {
        setAuthorName(resp.authorName);
        setImage(resp.image);
        setDescription(resp.description);
        setDateOfBirth(resp.dateOfBirth);
      });
    });
  };

  const handleUpdate = () => {
    let item = {
      authorName,
      dateOfBirth,
      description,
      image,
    };
    fetch(`http://localhost:8000/author/${currId}`, {
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
        <label>authorName</label>
        <input
          type="text"
          required
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
        />

        <label>Date Of Birth</label>
        <input
          type="date"
          required
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />

        <label>Author Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Author Image URL</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button>Edit Author</button>
      </form>
    </div>
  );
};

export default EditBook;
