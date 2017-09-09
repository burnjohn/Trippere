import React, { PureComponent } from 'react'
import './PhotoItem.css'
import 'font-awesome/css/font-awesome.min.css'
import FontIcon from 'material-ui/FontIcon';
import ImageUploader from 'react-images-upload';

const PhotoItem = ({ onImageDrop }) => (
  <div className="photo">
    <ImageUploader
      className="photo__input"
      onChange={ onImageDrop }
      imgExtension={['.jpg', '.gif', '.png', '.gif']}
      maxFileSize={5242880}
    />
    <FontIcon
      className="muidocs-icon-action-home"
      labelClass="photo__label"
      buttonText=""
      labelStyles={{'color': 'red'}}
      color={'red'}
    />
  </div>
)

export default PhotoItem

