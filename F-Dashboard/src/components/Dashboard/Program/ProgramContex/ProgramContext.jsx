import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const Programcontextcreate = createContext(null)

const ProgramContext = ({ children }) => {

    const [table, SetTable] = useState([])
    
    const [program,SetProgram] =useState(null)

    useEffect(() => {
        ProgramApi()
    }, [])

    const ProgramApi = async () => {

        try {
            const result = await axios.get('http://127.0.0.1:8000/program')
            SetTable(result.data)
            programCalstats(result.data)

        } catch (error) {
            console.error("API error", error)

        }
    }

    const programCalstats =(data)=>{
       const total = data.length

       const avgCompletion = data.reduce((sum,i)=>sum+i.completionRate,0)/total

       const startupRate = data.reduce((sum,i)=>sum+i.survivalRate,0)/total

       const overallKPI = data.reduce((sum,i)=>sum+i.kpiScore,0)/total

       const highperformers =data.filter(i=>i.status === "Excellent").length

       
       SetProgram({
         AvgcompletionRate:Math.round(avgCompletion),
         StartupsurvivalRate:Math.round(startupRate),
         OverallKPIScore:Math.round(overallKPI),
         HigherPerformers:highperformers,


       })

    }

    

    return (
        <>
            <Programcontextcreate.Provider value={{ table, program}}>
                {children}
            </Programcontextcreate.Provider>

        </>
    )
}

export default ProgramContext
