import React, { PureComponent } from 'react'
import ImageUploader from '../../components/ImageUploader/ImageUploader'
import './AddPhoto.css'
import { omit, get } from 'lodash'
import Layout from '../../components/Layout/Layout'

const PHOTO_FIELDS = {
    photo1: { file: '', image: '' },
    photo2: { file: '', image: '' },
    photo3: { file: '', image: '' }
}
const getEmptyPhotos = photos => {
  return Object.keys(photos).filter(
    key => !get(photos, `${key}.image`)
  )
}

class AddPhoto extends PureComponent {
  constructor() {
    super()

    this.state = {
      ...PHOTO_FIELDS,
      errorPhotos: [],
      message: null
    }
  }

  componentWillReceiveProps({ message }) {
    message && this.setState({ message })
  }

  handleSubmitClick = () => {
    const photos = { ...omit(this.state, ['errorPhotos', 'message' ]) }
    const emptyPhotos = getEmptyPhotos(photos)

    this.setState({ errorPhotos: emptyPhotos })

    if (emptyPhotos.length) return

    this.props.onSubmitClick(photos)
  }

  hideSnackBarMessage = () => {
    this.setState(
      { message: '' },
      this.props.clearMessage
    )
  }

  deleteImage = (e, name) => {
    this.setState({ [name]: { file: null, image: null } })
  }

  handleImageChange = (e, name) => {
    e.preventDefault()
    const reader = new FileReader()
    const file = e.target.files[0]

    console.log('file', file)

    const handleImageLoad = () => {
      this.setState({
        [name]: { file, image: reader.result }
      }, () => {
        reader.removeEventListener('loadend', handleImageLoad)
      })
    }

    reader.addEventListener('loadend', handleImageLoad)
    reader.readAsDataURL(file)
  }

  render() {
    const { message } = this.state
    const photos = omit(this.state, ['message', 'errorPhotos'])

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
          { Object.keys(photos).map((key) => {
            const { image } = this.state[key]

            return (<div className="image__item" key={key}>
              <ImageUploader
                imgName={key}
                image={ image }
                handleImageChange={(e) => this.handleImageChange(e, key)}
                deleteImage={(e) => this.deleteImage(e, key)}
              />
            </div>)
          })
          }
        </div>
      </Layout>
    )
  }
}

export default AddPhoto
