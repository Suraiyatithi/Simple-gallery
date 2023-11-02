/**
 * Title: Write a program using JavaScript on Gallery
 * Author: Hasibul Islam
 * Portfolio: https://devhasibulislam.vercel.app
 * Linkedin: https://linkedin.com/in/devhasibulislam
 * GitHub: https://github.com/devhasibulislam
 * Facebook: https://facebook.com/devhasibulislam
 * Instagram: https://instagram.com/devhasibulislam
 * Twitter: https://twitter.com/devhasibulislam
 * Pinterest: https://pinterest.com/devhasibulislam
 * WhatsApp: https://wa.me/8801906315901
 * Telegram: devhasibulislam
 * Date: 02, November 2023
 */

import React, { useState } from "react";
import GalleryHeader from "./GalleryHeader";
import GalleryImage from "./GalleryImage";
import ImageUploader from "./ImageUploader";
// import { Inter } from "next/font/google";
import img1 from '../assets/images/image-1.webp'
import img2 from '../assets/images/image-2.webp'
import img3 from '../assets/images/image-3.webp'
import img4 from '../assets/images/image-4.webp'
import img5 from '../assets/images/image-5.webp'
import img6 from '../assets/images/image-6.webp'
import img7 from '../assets/images/image-7.webp'
import img8 from '../assets/images/image-8.webp'
import img9 from '../assets/images/image-9.webp'
import img10 from '../assets/images/image-10.jpeg'
import img11 from '../assets/images/image-11.jpeg'
const images = [
    { id: 1, thumbnail: img1},
    { id: 2, thumbnail: img2 },
    { id: 3, thumbnail:img3},
    { id: 4, thumbnail: img4},
    { id: 5, thumbnail: img5 },
    { id: 6, thumbnail: img6 },
    { id: 7, thumbnail: img7 },
    { id: 8, thumbnail: img8 },
    { id: 9, thumbnail: img9 },
    { id: 10, thumbnail:img10},
    { id: 11, thumbnail: img11 },
  ];
  
 

// const inter = Inter({ subsets: ["latin"] });

const Gallery = () => {
  const [selectThumbnails, setSelectThumbnails] = useState([]);
  const [thumbnails, setThumbnails] = useState(images);
  const [dragging, setDragging] = useState(false);
  const [draggedImage, setDraggedImage] = useState(null);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;

    const newImages = Array.from(selectedFiles).map((file, index) => {
      const id = thumbnails.length + index + 1;
      const thumbnail = URL.createObjectURL(file);

      return { id, thumbnail };
    });

    setThumbnails([...thumbnails, ...newImages]);
  };

  const handleDeleteClick = () => {
    const updatedImages = thumbnails.filter(
      (image) => !selectThumbnails.some((selected) => selected.id === image.id)
    );

    setThumbnails(updatedImages);
    setSelectThumbnails([]);
  };

  const handleDragStart = (image) => {
    setDragging(true);
    setDraggedImage(image);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e?.target?.children[0]?.alt && setDraggedIndex(e?.target?.children[0]?.alt);
  };

  const handleDrop = (targetIndex) => {
    setDragging(false);

    if (draggedImage) {
      const updatedImages = thumbnails.filter(
        (image) => image.id !== draggedImage.id
      );
      updatedImages.splice(targetIndex, 0, draggedImage);

      setThumbnails(updatedImages);
      setDraggedImage(null);
    }
  };

  return (
    <main
    className={`min-h-screen w-screen flex flex-row items-center justify-center md:p-0 p-4 `}
    >
      <section className="lg:w-1/2 md:w-3/4 w-full bg-white rounded-lg shadow">
        <div className="flex flex-col gap-y-2">
          <GalleryHeader
            selectThumbnails={selectThumbnails}
            setSelectThumbnails={setSelectThumbnails}
            handleDeleteClick={handleDeleteClick}
          />
          <hr />
          <section className="h-full w-full p-6">
            <div
              className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-6"
              onDragOver={handleDragOver}
            >
              {thumbnails.map((image, index) => (
                <GalleryImage
                  key={index}
                  image={image}
                  index={index}
                  selectThumbnails={selectThumbnails}
                  setSelectThumbnails={setSelectThumbnails}
                  handleDragStart={handleDragStart}
                  handleDrop={handleDrop}
                  dragging={dragging}
                  draggedIndex={draggedIndex}
                />
              ))}
              <ImageUploader handleFileChange={handleFileChange} />
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Gallery;