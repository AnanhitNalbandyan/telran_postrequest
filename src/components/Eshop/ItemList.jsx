import { useContext } from 'react'
import { Item } from './Item'
import classes from './itemList.module.css'

export const ItemList = () => {

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
    setItems([...items, obj])
  }

  return (
    <div>
    
        <div className={classes.productList}>
            {items.map((product) => (
              <Item
                id={product.id}
                key={product.id}
                image={product.images[0]}
                description={product.description}
                title={product.title}
                price={product.price}
              />
            ))}
        </div>

    </div>
  )
}
