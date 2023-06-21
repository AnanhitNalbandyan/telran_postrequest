import { ItemList } from './components/Eshop/ItemList'


import { ApiContext } from './components/context'
import { useState,useEffect } from 'react'


import { AddItem } from './components/Eshop/AddItem'
import { postItem, deleteItem } from './request'
import { Timer } from './components/Timer/Inex'
import { ToggleTheme } from './components/Eshop/ToggleTheme'

import classes from './app.module.css'
import axios from 'axios'

function App() {

  const [items, setItems]= useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [theme, setTheme]= useState('light')


  useEffect(() => {
    const getdata = async () => {
      setIsLoading(true)
      try {
        const {data} = await axios.get('https://api.escuelajs.co/api/v1/products?limit=7&offset=1')
        
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
  const responseItem =  await postItem(obj)
  setItems([...items, responseItem])
  }

  const handleDeleteItem = async(id)=>{
    const response = await deleteItem(id)
    response 
      ? setItems((prevItems)=>prevItems.filter((el)=> el.id !==id))
      : console.log('error')
  }

  const toggleTheme = ()=>{
    setTheme(prevTheme =>(prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
  
    <ApiContext.Provider value={{items, handlePostedData, handleDeleteItem, setIsLoading, setError, toggleTheme }}>

      <div className="App">
        <Timer/>
        <ToggleTheme />
      <div className={classes.addItemContainer}>
        <AddItem/>
      </div>
        <h1 className={classes.header}>Our Best Eshop</h1>
      { error ? <h1>An error occurred: {error.message}</h1> : null}
        {isLoading ? <h1>LOADING...</h1>: 
        <ItemList />}
      </div> 

    

  </ApiContext.Provider>
  )
}

export default App
