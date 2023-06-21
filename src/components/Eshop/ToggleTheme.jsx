import { useContext } from 'react'
import { ApiContext } from '../context'
import style from './ToggleThem.module.css'


export const ToggleTheme = ()=>{

    const {toggleTheme}=useContext(ApiContext)

    return(
    
            <button 
            className={style.button}
            onClick={()=>{
                toggleTheme()
            }}>
                Toggle Theme
            </button>
    
    )
}