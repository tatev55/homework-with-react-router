import "./gallery.css";
import veganImage from "../../../assets/images/vegan.webp";
import lasagneImage from "../../../assets/images/Lasagne.webp";
import honeyImage from "../../../assets/images/Honey.webp";
import garlicImage from "../../../assets/images/Garlic.jpg";
import aaImage from "../../../assets/images/aa.jpg";
import easyImage from "../../../assets/images/Easy.jpg";
import pexelImage from "../../../assets/images/pexel.jpg";
import eaImage from "../../../assets/images/Ea.jpg";
import pancakesImage from "../../../assets/images/pancakes.webp";

const Gallery = () => {
  return (
    <div className="container">
      <h1 className="title">Gallery</h1>
      <div className="gallery">
        <div className="photo photo_tree">
          <img src={veganImage} alt="Vegan" />
        </div>
        <div className="photo">
          <img src={lasagneImage} alt="Lasagne" />
        </div>
        <div className="photo">
          <img src={honeyImage} alt="Honey" />
        </div>
        <div className="photo for">
          <img src={garlicImage} alt="Garlic" />
        </div>
        <div className="photo">
          <img src={aaImage} alt="AA" />
        </div>
        <div className="photo">
          <img src={easyImage} alt="Easy" />
        </div>
        <div className="photo photo_sunset">
          <img src={pexelImage} alt="Pexel" />
        </div>
        <div className="photo photo_flower_sunset">
          <img src={eaImage} alt="EA" />
        </div>
        <div className="photo photo_flower">
          <img src={pancakesImage} alt="Pancakes" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
