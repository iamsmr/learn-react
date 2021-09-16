import ImageCard from "./ImageCard";

const ImageList = ({ images }) => {
  const image = images.map((image) => (
    <ImageCard image={image} key={image.id} />
  ));
  return <div className="image-list">{image}</div>;
};

export default ImageList;
