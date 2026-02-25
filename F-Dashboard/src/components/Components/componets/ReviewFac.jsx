import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import axios from 'axios'

const ReviewFac = () => {

  const [data, setData] = useState(null)

  useEffect(() => {

    const supportId = localStorage.getItem("supportId")

    if (!supportId) {
      console.log("No supportId found")
      return
    }

    axios
      .get(`http://127.0.0.1:8000/support/${supportId}`)
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
            Amenities Provider
          </Typography>
        </Box>

        <Box sx={{ p: 2 }}>

          <Typography sx={{ fontWeight: 600, color: "#1E4A28" }}>
            Workspace & Comfort
          </Typography>

          {data.workspace_comfort?.map((item, index) => (
            <Typography key={index}>{item}</Typography>
          ))}

          <Typography sx={{ mt: 3, fontWeight: 600, color: "#1E4A28" }}>
            Connectivity & Parking
          </Typography>

          {data.connectivity_parking?.map((item, index) => (
            <Typography key={index}>{item}</Typography>
          ))}

        </Box>
      </Box>

      <Box sx={{ border: "2px solid #1E4A28" }}>

        <Box sx={{ bgcolor: "#1E4A28", p: 2, color: "white" }}>
          <Typography fontWeight={600}>
            Additional Services & Support
          </Typography>
        </Box>

        <Box sx={{ p: 2 }}>

          <Typography sx={{ fontWeight: 600, color: "#1E4A28" }}>
            Common Facilities
          </Typography>

          {data.common_facilities?.map((item, index) => (
            <Typography key={index}>{item}</Typography>
          ))}

          <Typography sx={{ mt: 3, fontWeight: 600, color: "#1E4A28" }}>
            Extra Offer for Incubatees
          </Typography>

          {data.extra_offers_incubatees?.map((item, index) => (
            <Typography key={index}>{item}</Typography>
          ))}

          <Typography sx={{ mt: 3, fontWeight: 600, color: "#1E4A28" }}>
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

export default ReviewFac