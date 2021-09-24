import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./createAuthor.css";

const CreateAuthor = ({ setOpenModal }) => {
  const [dateOfBirth, setDOB] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const author = { dateOfBirth, authorName, description, image };
    // post request
    fetch("http://localhost:8000/author/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(author),
    })
      .then(() => {
        // history.push("/");
        history.go("/");
        setOpenModal(false);
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <label>Author Name</label>
        <input
          type="text"
          required
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
        />

        <label>Date of Birth</label>
        <input
          type="date"
          required
          value={dateOfBirth}
          onChange={(e) => setDOB(e.target.value)}
        />

        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Author image URL</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button>Add Author</button>
      </form>
    </div>
  );
};

export default CreateAuthor;
