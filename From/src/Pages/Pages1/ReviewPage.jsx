import React, { useEffect, useState } from 'react'
import ReviewSect from '../../Components/componets/ReviewSect'
import RevSupport from '../../Components/componets/RevSupport'
import ReviewFac from '../../Components/componets/ReviewFac'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Api from '../Api';
import { useNavigate } from 'react-router';
import Button from '@mui/material/Button'


const ReviewPage = () => {
  const [reviewdata, SetReviewdata] = useState(null);

  const negative = useNavigate()
  useEffect(() => {
    Api.get('/support')
      .then(res => {
        SetReviewdata(res.data[0])
      })
      .catch(err => console.error(err));
  }, [])

  function handlechange() {
    negative('/submit',{ state: reviewdata })

  }
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
        <Typography sx={{ color: "green", fontWeight: 600, fontSize: 19 }}>
          Incubation Center review Details
        </Typography>
      </Box>

      <Box sx={{ my: 2, px: { xs: 2, md: 20 } }}>
        <ReviewSect reviewdata={reviewdata} />
      </Box>

      <Box sx={{ my: 2, px: { xs: 2, md: 20 } }}>
        {/* SUPPORT CHECKBOXES */}

        <RevSupport reviewdata={reviewdata} />

        {/* FACILITIES CHECKBOXES */}

        <ReviewFac reviewdata={reviewdata} />


      </Box>
      <Box>
        <Button
          onClick={handlechange}
          sx={{
            mt: 3,
            ml:20,
            mb: 5,
            bgcolor: "green",
            color: "white",
            px: 4,
            py: 1,
            "&:hover": { bgcolor: "#0f7a2a" },
          }}
        >
          Edit 
        </Button>
      </Box>
    </Box>
  )
}

export default ReviewPage
