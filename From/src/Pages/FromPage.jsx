import React from 'react'
import Box from '@mui/material/Box'
import ApplicantType from '../Components/ApplicantType'

const FromPage = () => {
  return (
    <Box sx={{p:4 , display:'flex',flexDirection:'column',gap:5}}>
      <ApplicantType/>
     
    </Box>
  )
}

export default FromPage
