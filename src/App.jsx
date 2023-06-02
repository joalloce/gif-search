import { useState } from "react";
import SearchBar from "./components/SearchBar";
import GifList from "./components/GifList";
function App() {
  const [gifs, setGifs] = useState([]);
  return (
    <div className="app">
      <h1>Gif Search APP</h1>
      <SearchBar setGifs={setGifs} />
      <GifList gifs={gifs}></GifList>
    </div>
  );
}

export default App;
