import  { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import axios from 'axios'

const ReviewSect = () => {

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
      <Box sx={{ border: "2px solid #1E4A28", width: "100%" }}>

        <Box sx={{ bgcolor: "#1E4A28", p: 2 }}>
          <Typography color="white" fontWeight={600}>
            Industry Sector
          </Typography>
        </Box>

        <Box sx={{ padding: 2 }}>

          {/* Domain */}
          <Typography
            sx={{
              fontWeight: 600,
              color: "#1E4A28",
              fontSize: "0.95rem",
            }}
          >
            Domain
          </Typography>

          {data.industry_sectors?.map((sector, index) => (
            <Typography key={index}>
              {sector.domain}
            </Typography>
          ))}

          {/* Sub Domain */}
          <Typography
            sx={{
              mt: 4,
              fontWeight: 600,
              color: "#1E4A28",
              fontSize: "0.95rem",
            }}
          >
            Sub Domain
          </Typography>

          {data.industry_sectors?.map((sector) =>
            sector.sub_domains?.map((sub, i) => (
              <Typography key={i}>
                {sub}
              </Typography>
            ))
          )}

        </Box>
      </Box>
    </>
  )
}

export default ReviewSect
