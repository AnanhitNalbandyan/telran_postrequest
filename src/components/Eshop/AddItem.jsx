import { useContext, useState } from 'react'
import { ApiContext } from '../context'
import classes from './addItem.module.css'

export const AddItem = ({ addNewProduct }) => {
  const {handlePostedData}= useContext(ApiContext)
  const [product, setProduct] = useState({
    id: new Date(),
    title: '',
    price: 1,
    description: '',
    categoryId: 1,
    images: ['https://picsum.photos/640/640?r=6408'],
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    handlePostedData(product)
    setProduct({
      id: new Date(),
      title: '',
      price: 1,
      description: '',
      categoryId: 1,
      images: ['https://picsum.photos/640/640?r=6408'],
    })
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <label htmlFor="title">title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={product.title}
        onChange={(e) => setProduct((prev) => ({ ...prev, title: e.target.value }))}
      />
      <label htmlFor="price">price</label>
      <input
        type="number"
        id="price"
        name="price"
        value={product.price}
        onChange={(e) => setProduct((prev) => ({ ...prev, price: e.target.value }))}
      />
      <label htmlFor="description">description</label>
      <input
        type="text"
        id="description"
        name="description"
        value={product.description}
        onChange={(e) => setProduct((prev) => ({ ...prev, description: e.target.value }))}
      />
      <button type="submit">ADD</button>
    </form>
  )
}
