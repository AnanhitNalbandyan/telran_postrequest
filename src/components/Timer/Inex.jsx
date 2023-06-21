import { useEffect, useState } from "react"
import style from './style.module.css'
export const Timer =()=>{
const [ seconds, setSeconds]= useState(0)

useEffect(()=>{
    const timer = setInterval(()=>{
        setSeconds((prevSeconds)=>
            prevSeconds +1)
    }, 1000)


    return ()=>{
        clearInterval(timer)
    }
}, [])



    return(
        <div className={style.timer}>
            {seconds}
        </div>
    )
}