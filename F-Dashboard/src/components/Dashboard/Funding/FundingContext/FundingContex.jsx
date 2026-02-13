import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const FundingProvider = createContext(null);

const FundingContex = ({children}) => {

    const [fundtable,SetFundtable] = useState([])

    useEffect(()=>{

     FundingAPI()


    },[])


    const FundingAPI = async () =>{

        const resultAPI = await axios.get('http://127.0.0.1:8000/funding')

        SetFundtable(resultAPI.data)




    }



  return (
    <>
      <FundingProvider.Provider value={{fundtable}}>
        {children}
      </FundingProvider.Provider>
    </>
  )
}

export default FundingContex
