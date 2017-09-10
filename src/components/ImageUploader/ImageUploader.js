import React, { PureComponent } from 'react'
import 'font-awesome/css/font-awesome.min.css'
import './ImageUploader.css'

const ImageUploader = ({
     imgName, image,
     handleImageChange, deleteImage
  }) => (
  <div className="image__container" >
    <form
      style={{ backgroundImage: `url(${ image })` }}
      className="image__form"
    >
        { !image && (
            <input
              className="image__input"
              type="file"
              onChange={ handleImageChange }
            />
        )}
    </form>
    { image && (
        <div
          className="image__delete-field"
          onClick={ deleteImage }
        >
          <i className="fa fa-times-circle-o image__delete-icon" aria-hidden="true" />
          <p>Remove</p>
        </div>
    )}

  </div>
)


export default ImageUploader