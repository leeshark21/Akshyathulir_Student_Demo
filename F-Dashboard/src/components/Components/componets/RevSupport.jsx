import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import axios from 'axios'

const RevSupport = () => {

  const [data, setData] = useState(null)

  useEffect(() => {

    const supportId = localStorage.getItem("supportId")

    

    axios.get(`http://127.0.0.1:8000/support/${supportId}`)
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      })
      .catch((err) => console.error(err))

  }, [])

  if (!data) return <p>Loading...</p>

  return (
    <>
      <Box sx={{ border: "2px solid #1E4A28", my: 2 }}>
        
        <Box sx={{ bgcolor: "#1E4A28", p: 2, color: "white" }}>
          <Typography fontWeight={600}>
            Type of Support Provider
          </Typography>
        </Box>

        <Box sx={{ p: 2 }}>

          {/* Infrastructure */}
          <Typography fontWeight={600} color="#1E4A28">
            Infrastructure & Facilities
          </Typography>

          {data.infrastructure?.map((item, index) => (
            <Typography key={index}>{item}</Typography>
          ))}

          {/* Business Support */}
          <Typography fontWeight={600} color="#1E4A28" mt={2}>
            Business & Startup Support
          </Typography>

          {data.business_startup_support?.map((item, index) => (
            <Typography key={index}>{item}</Typography>
          ))}

          {/* Funding */}
          <Typography fontWeight={600} color="#1E4A28" mt={2}>
            Funding & Financial Support
          </Typography>

          {data.funding_financial_support?.map((item, index) => (
            <Typography key={index}>{item}</Typography>
          ))}

          {/* Technology */}
          <Typography fontWeight={600} color="#1E4A28" mt={2}>
            Technology Innovation
          </Typography>

          {data.technology_innovation?.map((item, index) => (
            <Typography key={index}>{item}</Typography>
          ))}

          {/* Legal */}
          <Typography fontWeight={600} color="#1E4A28" mt={2}>
            Legal Compliance
          </Typography>

          {data.legal_compliance?.map((item, index) => (
            <Typography key={index}>{item}</Typography>
          ))}

          {/* Government */}
          <Typography fontWeight={600} color="#1E4A28" mt={2}>
            Government Ecosystem
          </Typography>

          {data.government_ecosystem?.map((item, index) => (
            <Typography key={index}>{item}</Typography>
          ))}

        </Box>
      </Box>
    </>
  )
}

export default RevSupport
