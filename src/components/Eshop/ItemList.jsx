import { useEffect, useState } from 'react'
import { Item } from './Item'
import { AddItem } from './AddItem'
import classes from './itemList.module.css'
import { postItem } from '../../requests'

export const ItemList = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getdata = async () => {
      setIsLoading(true)
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products?limit=7&offset=1')
        const data = await response.json()
        setItems(data)
        setIsLoading(false)
      } catch (error) {
        console.error('Error:', error)
        setError(error)
        setIsLoading(false)
      }
    }
    getdata()
  }, [])

  const handlePostedData = async (obj) => {
    const responseItem = await postItem(obj)
    setItems([...items, responseItem])
  }

  return (
    <div>
      <div className={classes.addItemContainer}>
        <AddItem addNewProduct={handlePostedData} />
      </div>
      {error ? <h1>An error occurred: {error.message}</h1> : null}
      {isLoading ? (
        <h1>LOADING...</h1>
      ) : (
        <div className={classes.productList}>
          {items.map((product) => (
            <Item
              key={product.id}
              image={product.images[0]}
              description={product.description}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      )}
    </div>
  )
}
