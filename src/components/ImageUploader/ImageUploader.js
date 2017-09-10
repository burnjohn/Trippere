import React, { PureComponent } from 'react'
import 'font-awesome/css/font-awesome.min.css'
import './ImageUploader.css'

class ImageUploader extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      file: '',
      imagePreviewUrl: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log('handle uploading-', this.state.file);
  }

  handleImageChange = (e) => {
    e.preventDefault();
    const reader = new FileReader()
    const file = e.target.files[0]

    const handleImageLoad = () => {
      console.log('start');

      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      }, () => {
        console.log('end');
        reader.removeEventListener('loadend', handleImageLoad)
      })
    }

    reader.addEventListener('loadend', handleImageLoad)
    reader.readAsDataURL(file)
  }

  render() {
    const { imagePreviewUrl = '' } = this.state;

    return (
      <div className="image__container" >
        <form
          style={{ backgroundImage: `url(${ imagePreviewUrl })` }}
          className="image__form"
          onSubmit={ this.handleSubmit }
        >
            { !imagePreviewUrl && (
                <input
                  className="image__input"
                  type="file"
                  onChange={ this.handleImageChange }
                />
            )}
        </form>
        { imagePreviewUrl && (
            <div className="image__delete-field">
              <i className="fa fa-times-circle-o image__delete-icon" aria-hidden="true" />
              <p>Remove</p>
            </div>
        )}

      </div>
    )
  }
}

export default ImageUploader