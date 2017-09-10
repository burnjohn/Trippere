import React, { PureComponent } from 'react'
import { uploadFile } from './AddPhotoService'
import AddPhoto from './AddPhoto'

const MESSAGES = {
  success: 'Images saved successfully',
  fail: 'Some error has occured'
}

class AddPhotoContainer extends PureComponent {
  constructor(){
    super()

    this.state = {
      imageUrls: null,
      message: null
    }
  }

  onSubmitClick = ({ photo1, photo2, photo3 }) => {
    const uploadList = [ photo1, photo2, photo3 ]

    Promise.all(uploadList.map(
      ({ file }) => uploadFile(file)
    )).then(response => {
      const urls = response.map(({ url }) => url)

      this.setState({
        imageUrls: urls,
        message: MESSAGES.success
      })
    }).catch(error => {
      this.setState({ message: MESSAGES.fail })
    })

  }

  render() {
    return(
      <AddPhoto
        onSubmitClick={ this.onSubmitClick }
        message={ this.state.message }
      />
    )
  }
}

export default AddPhotoContainer