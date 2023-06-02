const Thumbnail = ({ gif }) => {
  return (
    <img className="image" src={gif.images.fixed_width_downsampled.url}></img>
  );
};

export default Thumbnail;
