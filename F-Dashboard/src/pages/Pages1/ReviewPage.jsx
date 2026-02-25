import React, { useEffect, useState } from 'react'
import ReviewSect from '../../components/Components/componets/ReviewSect'
import RevSupport from '../../components/Components/componets/RevSupport'
import ReviewFac from '../../components/Components/componets/ReviewFac'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Api from '../Api';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'

const ReviewPage = () => {

  const [reviewdata, SetReviewdata] = useState(null);
  const navigate = useNavigate();

  
  useEffect(() => {

    const id = localStorage.getItem("supportId");
    console.log("hi iam useeffect")
    if (id) {
      Api.get(`/support/${id}`)
        .then(res => {
          SetReviewdata(res.data);
        })
        .catch(err => console.error("Fetch Error:", err));
    }

  }, []);

  console.log("hi iam console")

 
  const handlechange = () => {
    navigate('/review', { state: reviewdata });
  };

  return (
    <Box>

      <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
        <Typography sx={{ color: "#1E4A28", fontWeight: 600, fontSize: 19 }}>
          Incubation Center Review Details
        </Typography>
      </Box>

      {reviewdata && (
        <>
          <Box sx={{ my: 2 }}>
            <ReviewSect reviewdata={reviewdata} />
          </Box>

          <Box sx={{ my: 2 }}>
            <RevSupport reviewdata={reviewdata} />
          </Box>

          <Box sx={{ my: 2 }}>
            <ReviewFac reviewdata={reviewdata} />
          </Box>

          <Box>
            <Button
              onClick={handlechange}
              sx={{
                mt: 3,
                mb: 5,
                bgcolor: "#1E4A28",
                color: "white",
                px: 4,
                py: 1,
                "&:hover": { bgcolor: "#0f7a2a" },
              }}
            >
              Edit
            </Button>
          </Box>
        </>
      )}

    </Box>
  )
}

export default ReviewPage
