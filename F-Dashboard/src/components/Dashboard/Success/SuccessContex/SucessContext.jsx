
import axios from 'axios';
import { createContext, useEffect, useState } from 'react'

export const SuccessCreate =createContext(null)

const SucessContext = ({children}) => {

    const [success,SetSuccess] = useState([])

    useEffect(()=>{

     successAPI()


    },[])


    const successAPI = async () =>{

        const resultAPI = await axios.get('http://127.0.0.1:8000/success')

        SetSuccess(resultAPI.data)




    }
  return (
    <>
    <SuccessCreate.Provider value={{success}}>
        {children}
    </SuccessCreate.Provider>
      
    </>
  )
}

export default SucessContext
