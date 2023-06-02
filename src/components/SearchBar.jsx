import axios from "axios";
import { useState } from "react";

const SearchBar = ({ setGifs }) => {
  const [searchString, setSearchString] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=${
          import.meta.env.VITE_API_KEY
        }&q=${searchString}`
      );
      setGifs(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="input-search"
          type="text"
          onChange={(e) => {
            setSearchString(e.target.value);
          }}
        />
        <button type="submit" className="button-search">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
