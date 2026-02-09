import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import axios from 'axios'



const RevSupport = () => {
  const [data, SetData] = useState([])

  useEffect(() => {
    axios('http://127.0.0.1:8000/support')
      .then((res) => SetData(res.data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <>
      <Box sx={{ border: "2px solid #1E4A28", height: "100%",my:2 }}>
        <Box sx={{ bgcolor: "#1E4A28", p: 2, color: "white" }}>
          <Typography fontWeight={600}>
            Type of Support Provider
          </Typography>
        </Box>

        <Box >
          {/* 1 box */}
          <Box sx={{padding:2}}>

            <Typography
              sx={{
                fontWeight: 600,
                color: "#1E4A28",
                mb: 1,
                fontSize: "0.95rem",
              }}
            >
              Infrastructure & Facilities
            </Typography>
            {
              data.map(i => i.infrastructure.map((items, index) => (
               <Box sx={{display:'flex'}}>
                <Typography key={index}
                  sx={{
                    fontWeight: 600,

                    mb: 1,
                    fontSize: "0.95rem",
                  }}
                >
                  {items}
                </Typography>
                </Box>

              )))
            }

          </Box>

          {/* 2 box */}
          <Box sx={{padding:2}}>

            <Typography
              sx={{
                fontWeight: 600,
                color: "#1E4A28",
                mb: 1,
                fontSize: "0.95rem",
              }}
            >
              Business & Startup Support
            </Typography>
            {
              data.map(i => i.business_startup_support.map((items, index) => (

                <Typography key={index}
                  sx={{
                    fontWeight: 600,

                    mb: 1,
                    fontSize: "0.95rem",
                  }}
                >
                  {items}
                </Typography>

              )))
            }

          </Box>

          {/* 3 box */}
          <Box sx={{padding:2}}>

            <Typography
              sx={{
                fontWeight: 600,
                color: "#1E4A28",
                mb: 1,
                fontSize: "0.95rem",
              }}
            >
              Funding & Financial Support
            </Typography>
            {
              data.map(i => i.funding_financial_support.map((items, index) => (

                <Typography key={index}
                  sx={{
                    fontWeight: 600,

                    mb: 1,
                    fontSize: "0.95rem",
                  }}
                >
                  {items}
                </Typography>

              )))
            }

          </Box>

        </Box>
      </Box>



       <Box sx={{ border: "2px solid #1E4A28", height: "100%" }}>
        <Box sx={{ bgcolor: "#1E4A28", p: 2, color: "white" }}>
          <Typography fontWeight={600}>
            Specialized & Institutional Support
          </Typography>
        </Box>

        <Box >
          {/* 1 box */}
          <Box sx={{padding:2}}>

            <Typography
              sx={{
                fontWeight: 600,
                color: "#1E4A28",
                mb: 1,
                fontSize: "0.95rem",
              }}
            >
             Technology innovation
            </Typography>
            {
              data.map(i => i.technology_innovation.map((items, index) => (

                <Typography key={index}
                  sx={{
                    fontWeight: 600,

                    mb: 1,
                    fontSize: "0.95rem",
                  }}
                >
                  {items}
                </Typography>

              )))
            }

          </Box>

          {/* 2 box */}
          <Box sx={{padding:2}}>

            <Typography
              sx={{
                fontWeight: 600,
                color: "#1E4A28",
                mb: 1,
                fontSize: "0.95rem",
              }}
            >
              Legal compliance
            </Typography>
            {
              data.map(i => i.legal_compliance.map((items, index) => (

                <Typography key={index}
                  sx={{
                    fontWeight: 600,

                    mb: 1,
                    fontSize: "0.95rem",
                  }}
                >
                  {items}
                </Typography>

              )))
            }

          </Box>

          {/* 3 box */}
          <Box sx={{padding:2}}>

            <Typography
              sx={{
                fontWeight: 600,
                color: "#1E4A28",
                mb: 1,
                fontSize: "0.95rem",
              }}
            >
              Government Ecosystem
            </Typography>
            {
              data.map(i => i.government_ecosystem.map((items, index) => (

                <Typography key={index}
                  sx={{
                    fontWeight: 600,

                    mb: 1,
                    fontSize: "0.95rem",
                  }}
                >
                  {items}
                </Typography>

              )))
            }

          </Box>

        </Box>
      </Box>
    </>
  )
}

export default RevSupport
