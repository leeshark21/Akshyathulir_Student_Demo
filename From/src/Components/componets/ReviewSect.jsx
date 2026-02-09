import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import axios from 'axios'
import Sector from '../Sector'



const ReviewSect = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/support')
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => console.error(err))

  }, [])
  return (
    <>
      <Box sx={{ border: "2px solid green", width: "100%" }} >
        <Box sx={{ bgcolor: "green", p: 2 }}>
          <Typography color="white" fontWeight={600}>
            Industry Sector
          </Typography>
        </Box >

        <Box sx={{ padding: 2 }}>
          {
            data.map(item => item.industry_sectors.map((Sector, index) => (

              <Box key={index}>

                <Typography sx={{
                  mb: 1, fontWeight: 600,
                  color: "green",
                  mb: 1,
                  fontSize: "0.95rem",
                }}>
                  Domain
                </Typography>
                <Typography variant="body1" color="initial"> {Sector.domain}</Typography>
              </Box>

            )))
          }

          <Box >

            {

              data.map(items => items.industry_sectors.map((s) => s.sub_domains.map((sub, i) => (
                <box>
                  <Typography sx={{
                    mb: 1, fontWeight: 600,
                    color: "green",
                    mb: 1,
                    fontSize: "0.95rem",
                  }}>
                    Sub Domain
                  </Typography>
                  <Typography key={i} variant="body1" color="initial"> {sub}</Typography>
                </box>
              ))))
            }

          </Box>

        </Box>


      </Box>

    </>
  )
}

export default ReviewSect
