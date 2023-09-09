import { useState } from "react";
import { Link } from "react-router-dom";

export default function Images() {
  const [image, setImage] = useState(0);
  // TODO: Find a way to do this dynamically
  const images = [
    "2cents.jpg",
    "aquire.jpg",
    "dolla.jpg",
    "drip.jpg",
    "help.jpg",
    "hypeman.jpg",
    "krabs.jpg",
    "littlefella.jpg",
    "lumasmash.jpg",
    "max.jpg",
    "max2.jpg",
    "perl.jpg",
    "pickledan.jpg",
    "pikaduck.jpg",
    "prove.jpg",
    "redfox.jpg",
    "sal.jpg",
    "skitty.jpg",
    "squarekirby.jpg",
    "squidword.jpg",
    "squirrelman.jpg",
  ];

  function cycleImage() {
    setImage((image + 1) % images.length);
  }

  function reverseCycleImage() {
    setImage((image + images.length - 1) % images.length);
  }

  // The image may need some scripting to properly size it.
  // I would like smaller images to be scaled up to fit the nested <div>
  // and larger images to be scaled down.
  return (
    <div className="gallery">
      <button onClick={reverseCycleImage}>&lt;</button>
      <div>
        <a href={"images/" + images[image]}>
          <img src={"images/" + images[image]} alt={images[image]} />
        </a>
      </div>
      <button onClick={cycleImage}>&gt;</button>
    </div>
  );
}
