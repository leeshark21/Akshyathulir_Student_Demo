import React from 'react'
import MentorButton from '../../components/MentorComponents/MentorButton'
import MentorList from '../../components/MentorComponents/MentorList'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const Mentorship = () => {
  return (
    <Box sx={{ m: 3 }}>

      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          color: '#1a1a1a',
          mb: 4,
          fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
          letterSpacing: '-0.5px',
        }}
      >
        MentorShip
      </Typography>

      <MentorButton />
      <MentorList />
    </Box>
  )
}

export default Mentorship
