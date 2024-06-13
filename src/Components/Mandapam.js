import React from "react";
import "../css/gallery.css";

const importAll = (requireContext) => requireContext.keys().map(requireContext);
const images = importAll(
  require.context("../assets/Mandapam", false, /\.(png|jpe?g|svg)$/)
);
function Mandapam() {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img key={index} src={image} alt="Not Found" />
      ))}
    </div>
  );
}

export default Mandapam;
