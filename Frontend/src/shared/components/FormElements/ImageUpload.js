import React, { useRef } from "react";

import "./ImageUpload.css";
import Button from "./Button";

const ImageUpload = (props) => {
  const filePickerRef = useRef();

  const pickedHandler = (event) => {
    // let pickedFile;
    // let fileIsValid = props.isValid;
    console.log(event.target);
  };

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  return (
    <div className="form-control">
      <input
        id={props.id}
        ref={filePickerRef}
        type="file"
        style={{ display: "none" }}
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler}
      />
      <div className={`image-upload ${props.center && "center"}`}>
        <div className="image-upload__preview">
          <img src={props.previewUrl} alt="Preview" />
          {!props.previewUrl && <p>Please pick an image.</p>}
        </div>
        <Button type="button" onClick={pickImageHandler}>
          PICK IMAGE
        </Button>
      </div>
      <div className="form-control__error">{props.errorText}</div>
    </div>
  );
};

export default ImageUpload;
