import { useContext } from 'react'
import { ApiContext } from '../context'
import classes from './item.module.css'

export const Item = ({ id, title, price, image, description }) => {
  
  const {handleDeleteItem } = useContext(ApiContext)
  

  return (
    <div className={classes.item}>
      <h1>{title}</h1>
      <img className={classes.image} src={image} alt={title} />
      <p className={classes.description}>{description}</p>
      <span>{price}$</span>
      <button onClick={()=>handleDeleteItem(id)}>Delete</button>
    </div>
  )
}
