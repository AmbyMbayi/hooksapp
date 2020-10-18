import React, { useState } from "react";

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    addSong(title);
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Song name:</label>
        <input
          type="text"
          placeholder="enter song name"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input type="submit" value="add song" />
      </form>
    </div>
  );
};

export default NewSongForm;
