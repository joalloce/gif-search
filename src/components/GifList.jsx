import Thumbnail from "./Thumbnail";

const GifList = ({ gifs }) => {
  return (
    <>
      {gifs.map((gif) => (
        <Thumbnail key={gif.id} gif={gif} />
      ))}
    </>
  );
};

export default GifList;
