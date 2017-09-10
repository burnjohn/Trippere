import { API_ROOT } from '../../config'

export const uploadFile = (file) => {
  const data = new FormData()
  data.append('data', file)

  return fetch(`https://api.graph.cool/file/v1/${ API_ROOT }`, {
    method: 'POST',
    body: data
  })
}
