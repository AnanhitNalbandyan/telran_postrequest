import { useContext} from 'react'
import { Item } from './Item'
import classes from './itemList.module.css'

import {ApiContext} from '../context'


export const ItemList = () => {
  
  const {setItems, items } = useContext(ApiContext)
  

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
