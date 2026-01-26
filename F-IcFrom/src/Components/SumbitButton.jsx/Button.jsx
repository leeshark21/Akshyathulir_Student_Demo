import React from 'react'
import Box from '@mui/material/Box'
import { border, width } from '@mui/system'

const Button = () => {
  return (
    <>
    <Box display="flex" mx="auto" my="auto" sx={{ width: '100%', height: '100%' ,marginTop:'30px'}} 
    justifyContent="center"
    alignItems="center"
    >
        <Box sx={{ display: 'flex', gap: 2 }}>
            <Button sx={{height: '40px',border: '1px solid green' , width: '100px'}}>Sumit</Button>
            <Button sx={{height: '40px',border: '1px solid red' , width: '100px'}}>Rest all</Button>
        </Box>
      
    </Box>
      
    </>
  )
}

export default Button
