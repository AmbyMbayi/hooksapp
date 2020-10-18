import React, { useState, useEffect } from "react";
import uuid from "uuid/dist/v1";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Song One", id: 1 },
    { title: "Song Two", id: 2 },
  ]);
  const [age, setAge] = useState(20);

  const addSong = (title) => {
    setSongs([...songs, { title, id: uuid() }]);
  };

  useEffect(() => {
    console.log("update use Effect", songs);
  }, [songs]);

  useEffect(() => {
    console.log("upadate age useEffect", age);
  }, [age]);
  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add age {age}</button>
    </div>
  );
};

export default SongList;
