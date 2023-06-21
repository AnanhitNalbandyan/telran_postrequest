import axios from 'axios'

export const postItem = async (item) => {
  const url = 'https://api.escuelajs.co/api/v1/products'

  try {
    const response = await axios.post(url, item, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response.status !== 201) {
      throw new Error('request failed')
    }

    console.log(response.data)
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}
