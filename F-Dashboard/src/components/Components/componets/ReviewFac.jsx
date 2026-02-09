import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import axios from 'axios'



const ReviewFac = () => {
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
           Amenities Provider
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
              Workspace & Comfort
            </Typography>
            {
              data.map(i => i.workspace_comfort.map((items, index) => (

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
              Connectivity & Parking
            </Typography>
            {
              data.map(i => i.connectivity_parking.map((items, index) => (

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
            Additional Services & Support
          </Typography>
        </Box>

        <Box  >
          {/* 1 box */}
          <Box  sx={{padding:2}}>

            <Typography
              sx={{
                fontWeight: 600,
                color: "#1E4A28",
                mb: 1,
                fontSize: "0.95rem",
              }}
            >
            Common Facilities
            </Typography>
            {
              data.map(i => i.commom_facilities.map((items, index) => (

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
              Extra Offer for Incubatees
            </Typography>
            {
              data.map(i => i.extra_offers_incubatees.map((items, index) => (

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

export default ReviewFac

