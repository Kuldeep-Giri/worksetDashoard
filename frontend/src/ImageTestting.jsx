import React, { useState } from 'react';

const ImageContainer = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const selectedImage = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    if (selectedImage) {
      reader.readAsDataURL(selectedImage);
    }
  };

  return (
    <div className="image-container">
     
  {
    image ? "":    <div className="image-upload-wrap">
    <input className="file-upload-input" onChange={handleImageUpload} type="file"  accept="image/*" />
    <div className="drag-text">
      {/* <FaArrowUp className='imgIcon' /> */}
      <p>Drag and drop here</p>
      <button className='uploadBtn'>Upload</button>
    </div>
  </div>
  }
      {image && (
        <div className="image-preview">
          <img src={image} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </div>
      )}
    </div>
  );
};

export default ImageContainer;
