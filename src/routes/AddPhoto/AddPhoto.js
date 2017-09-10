import React, { PureComponent } from 'react'
import ImageUploader from '../../components/ImageUploader/ImageUploader'
import './AddPhoto.css'
import { omit } from 'lodash'
import Layout from '../../components/Layout/Layout';

const PHOTO_FIELDS = [
  {
    name: 'photo-1',
    src: null
  },
  {
    name: 'photo-2',
    src: null
  },
]

const getEmptyForms = forms => Object.keys(forms).filter(key => !forms[key])

class AddPhoto extends PureComponent {
  constructor() {
    super()

    this.state = {
      photos: PHOTO_FIELDS,
      errorPhotos: [],
      message: null
    }
  }

  componentWillReceiveProps({ message }) {
    message && this.setState({ message })
  }

  updateField = (name, value) => {
    this.setState({ [name]: value })
  }

  handleSubmitClick = () => {
    const newUser = { ...omit(this.state, ['errorForms', 'message' ]) }
    const emptyForms = getEmptyForms(newUser);

    this.setState({ errorForms: emptyForms })

    if (emptyForms.length) return

    this.props.onSubmitClick(newUser)
  }

  hideSnackBarMessage = () => {
    this.setState(
      { message: '' },
      this.props.clearMessage
    )
  }

  onImageDrop = (picture) => {
    this.setState({
      pictures: this.state.photos.concat(picture),
    });
  }

  render() {
    const {
      message
    } = this.state

    return (
      <Layout
        message={message}
        headerText={'Add photos'}
        hideSnackBarMessage={ this.hideSnackBarMessage }
        onSubmitClick={ this.handleSubmitClick }
        buttonClass="photo__next-btn"
      >
        <div className="photo__text">
          <h3>Add your quality photos</h3>
          <p>Photos increase the chance to be picked by 80%!</p>
        </div>
        <div className="image__gallery">
          { [1,2,3].map(({ item }) => (
              <div className="image__item">
                <ImageUploader
                  key={ Math.random() }
                  onImageDrop={ this.onImageDrop }
                />
              </div>
            ))
          }
        </div>
      </Layout>
    );
  }
}

export default AddPhoto;
