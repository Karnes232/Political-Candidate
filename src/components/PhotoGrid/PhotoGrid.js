import React, { useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
const PhotoGrid = ({ images }) => {
  const [index, setIndex] = useState(-1);
  let photoList = [];

  images.forEach((image, key) => {
    const imageSplit = image.gatsbyImage?.images?.fallback?.srcSet.split(",");
    const lastImage = imageSplit.pop();
    const newUrl = lastImage.split(" ")[0];

    const photoObject = {
      src: newUrl,
      width: image.gatsbyImage.width,
      height: image.gatsbyImage.height,
    };
    photoList.push(photoObject);
  });

  return (
    <div className="mb-5">
      <RowsPhotoAlbum
        photos={photoList}
        // targetRowHeight={150}
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        slides={photoList}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
};

export default PhotoGrid;
