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
      <Box sx={{ border: "2px solid #1E4A28", width: "100%" }} >
        <Box sx={{ bgcolor: "#1E4A28", p: 2 }}>
          <Typography color="white" fontWeight={600}>
            Industry Sector
          </Typography>
        </Box >

        <Box sx={{ padding: 2 }}>


          <Box >

            <Typography sx={{
              mb: 1, fontWeight: 600,
              color: "#1E4A28",
              mb: 1,
              fontSize: "0.95rem",
            }}>
              Domain
            </Typography>

            {
              data.map(item => item.industry_sectors.map((Sector, index) => (
                <Typography key={index} variant="body1" color="initial"> {Sector.domain}</Typography>


              )))
            }

          </Box>
          <Box >




            <box>
              <Typography sx={{
                mt:5,
                mb: 1, fontWeight: 600,
                color: "#1E4A28",
                mb: 1,
                fontSize: "0.95rem",
              }}>
                Sub Domain
              </Typography>
              {
                data.map(items => items.industry_sectors.map((s) => s.sub_domains.map((sub, i) => (
                  <Typography key={i} variant="body1" color="initial"> {sub}</Typography>

                ))))
              }
            </box>
          </Box>

        </Box>


      </Box>

    </>
  )
}

export default ReviewSect
