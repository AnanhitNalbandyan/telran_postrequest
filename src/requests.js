export const postItem = async (item) => {
  const url = 'https://api.escuelajs.co/api/v1/products'

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    })

    if (!response.ok) {
      throw new Error('request failed')
    }

    console.log(response)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}
